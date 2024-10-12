# ChannelOptionsMessenger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The channel to send to. You must provide &#x60;messenger&#x60; in this field | [optional] 
**var_from** | **str** | The ID of the message sender  | [optional] 
**messenger** | [**ChannelOptionsMessengerMessenger**](ChannelOptionsMessengerMessenger.md) |  | [optional] 
**to** | **str** | The ID of the message recipient  | [optional] 

## Example

```python
from openapi_client.models.channel_options_messenger import ChannelOptionsMessenger

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelOptionsMessenger from a JSON string
channel_options_messenger_instance = ChannelOptionsMessenger.from_json(json)
# print the JSON string representation of the object
print(ChannelOptionsMessenger.to_json())

# convert the object into a dict
channel_options_messenger_dict = channel_options_messenger_instance.to_dict()
# create an instance of ChannelOptionsMessenger from a dict
channel_options_messenger_from_dict = ChannelOptionsMessenger.from_dict(channel_options_messenger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


