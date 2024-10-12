# ChannelMessages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**messages** | [**List[Message]**](Message.md) |  | 

## Example

```python
from openapi_client.models.channel_messages import ChannelMessages

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelMessages from a JSON string
channel_messages_instance = ChannelMessages.from_json(json)
# print the JSON string representation of the object
print(ChannelMessages.to_json())

# convert the object into a dict
channel_messages_dict = channel_messages_instance.to_dict()
# create an instance of ChannelMessages from a dict
channel_messages_from_dict = ChannelMessages.from_dict(channel_messages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


