# MessengerOneOf3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**message_type** | **str** | The type of message to send. You must provide &#x60;video&#x60; in this field | 
**video** | [**MessengerOneOf3AllOfVideo**](MessengerOneOf3AllOfVideo.md) |  | 
**channel** | **str** | The channel to send to. You must provide &#x60;messenger&#x60; in this field | 
**var_from** | **str** | The ID of the message sender  | 
**messenger** | [**ChannelOptionsMessengerMessenger**](ChannelOptionsMessengerMessenger.md) |  | [optional] 
**to** | **str** | The ID of the message recipient  | 

## Example

```python
from openapi_client.models.messenger_one_of3 import MessengerOneOf3

# TODO update the JSON string below
json = "{}"
# create an instance of MessengerOneOf3 from a JSON string
messenger_one_of3_instance = MessengerOneOf3.from_json(json)
# print the JSON string representation of the object
print(MessengerOneOf3.to_json())

# convert the object into a dict
messenger_one_of3_dict = messenger_one_of3_instance.to_dict()
# create an instance of MessengerOneOf3 from a dict
messenger_one_of3_from_dict = MessengerOneOf3.from_dict(messenger_one_of3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


