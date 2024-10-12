# ChatEvent

The discriminator object for all websocket events, you should use this to map event payloads to their own type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'user.watching.stop']
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**team** | **str** |  | [optional] 
**clear_history** | **bool** |  | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**message** | [**Message**](Message.md) |  | 
**me** | [**OwnUser**](OwnUser.md) |  | 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**hard_delete** | **bool** |  | 
**thread_participants** | [**List[UserObject]**](UserObject.md) |  | [optional] 
**flag** | [**Flag**](Flag.md) |  | [optional] 
**watcher_count** | **int** |  | 
**last_read_message_id** | **str** |  | [optional] 
**total_unread_count** | **int** |  | 
**unread_channels** | **int** |  | 
**unread_count** | **int** |  | 
**first_unread_message_id** | **str** |  | 
**last_read_at** | **datetime** |  | 
**unread_messages** | **int** |  | 
**reaction** | [**Reaction**](Reaction.md) |  | 
**parent_id** | **str** |  | [optional] 
**created_by** | [**UserObject**](UserObject.md) |  | 
**expiration** | **datetime** |  | [optional] 
**reason** | **str** |  | [optional] 
**shadow** | **bool** |  | 
**delete_conversation_channels** | **bool** |  | 
**mark_messages_deleted** | **bool** |  | 
**target_user** | **str** |  | [optional] 
**target_users** | **List[str]** |  | [optional] 
**channels** | [**Dict[str, ChannelMessages]**](ChannelMessages.md) |  | 

## Example

```python
from openapi_client.models.chat_event import ChatEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChatEvent from a JSON string
chat_event_instance = ChatEvent.from_json(json)
# print the JSON string representation of the object
print(ChatEvent.to_json())

# convert the object into a dict
chat_event_dict = chat_event_instance.to_dict()
# create an instance of ChatEvent from a dict
chat_event_from_dict = ChatEvent.from_dict(chat_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


