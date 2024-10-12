# ChannelStateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**duration** | **str** |  | 
**hidden** | **bool** |  | [optional] 
**hide_messages_before** | **datetime** |  | [optional] 
**members** | [**List[ChannelMember]**](ChannelMember.md) |  | 
**membership** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**messages** | [**List[Message]**](Message.md) |  | 
**pending_messages** | [**List[PendingMessage]**](PendingMessage.md) |  | [optional] 
**pinned_messages** | [**List[Message]**](Message.md) |  | 
**read** | [**List[Read]**](Read.md) |  | [optional] 
**watcher_count** | **int** |  | [optional] 
**watchers** | [**List[UserObject]**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_state_response import ChannelStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelStateResponse from a JSON string
channel_state_response_instance = ChannelStateResponse.from_json(json)
# print the JSON string representation of the object
print(ChannelStateResponse.to_json())

# convert the object into a dict
channel_state_response_dict = channel_state_response_instance.to_dict()
# create an instance of ChannelStateResponse from a dict
channel_state_response_from_dict = ChannelStateResponse.from_dict(channel_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


