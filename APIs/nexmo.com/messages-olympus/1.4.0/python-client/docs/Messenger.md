# Messenger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**message_type** | **str** | The type of message to send. You must provide &#x60;file&#x60; in this field | 
**text** | **object** | The text of message to send; limited to 640 characters, including unicode.  | 
**channel** | **str** | The channel to send to. You must provide &#x60;messenger&#x60; in this field | 
**var_from** | **str** | The ID of the message sender  | 
**messenger** | [**ChannelOptionsMessengerMessenger**](ChannelOptionsMessengerMessenger.md) |  | [optional] 
**to** | **str** | The ID of the message recipient  | 
**image** | [**MessengerOneOf1AllOfImage**](MessengerOneOf1AllOfImage.md) |  | 
**audio** | [**MessengerOneOf2AllOfAudio**](MessengerOneOf2AllOfAudio.md) |  | 
**video** | [**MessengerOneOf3AllOfVideo**](MessengerOneOf3AllOfVideo.md) |  | 
**file** | [**MessengerOneOf4AllOfFile**](MessengerOneOf4AllOfFile.md) |  | 

## Example

```python
from openapi_client.models.messenger import Messenger

# TODO update the JSON string below
json = "{}"
# create an instance of Messenger from a JSON string
messenger_instance = Messenger.from_json(json)
# print the JSON string representation of the object
print(Messenger.to_json())

# convert the object into a dict
messenger_dict = messenger_instance.to_dict()
# create an instance of Messenger from a dict
messenger_from_dict = Messenger.from_dict(messenger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


