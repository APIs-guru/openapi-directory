# ChannelStateResponseFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**hidden** | **bool** | Whether this channel is hidden or not | [optional] 
**hide_messages_before** | **datetime** | Messages before this date are hidden from the user | [optional] 
**members** | [**List[ChannelMember]**](ChannelMember.md) | List of channel members | 
**membership** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**messages** | [**List[Message]**](Message.md) | List of channel messages | 
**pending_messages** | [**List[PendingMessage]**](PendingMessage.md) | Pending messages that this user has sent | [optional] 
**pinned_messages** | [**List[Message]**](Message.md) | List of pinned messages in the channel | 
**read** | [**List[Read]**](Read.md) | List of read states | [optional] 
**watcher_count** | **int** | Number of channel watchers | [optional] 
**watchers** | [**List[UserObject]**](UserObject.md) | List of user who is watching the channel | [optional] 

## Example

```python
from openapi_client.models.channel_state_response_fields import ChannelStateResponseFields

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelStateResponseFields from a JSON string
channel_state_response_fields_instance = ChannelStateResponseFields.from_json(json)
# print the JSON string representation of the object
print(ChannelStateResponseFields.to_json())

# convert the object into a dict
channel_state_response_fields_dict = channel_state_response_fields_instance.to_dict()
# create an instance of ChannelStateResponseFields from a dict
channel_state_response_fields_from_dict = ChannelStateResponseFields.from_dict(channel_state_response_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


