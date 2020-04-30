import React, { Component } from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    // <View style={{backgroundColor: '#2196F3'}} />
    <View>
      <Text>Mohammad Zuz Ubaidillah</Text>
      <Zuz />
      <Photo />
      <TextInput style={{borderWidth: 1, marginTop: 10}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Zuz = () => {
  return <Text>Programer Kreatif</Text>;
};

const Photo = () => {
  return (
    <Image 
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width:100, height:100}}
      />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Componen Class</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{uri: 'https://placeimg.com/100/100/animals'}}
        style={{width:100, height:100, borderRadius: 50}}
         />
        <Text>Ini Hewan</Text>
      </View>
    )
  }
}

export default App;