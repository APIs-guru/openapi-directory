# LiveChatModerator

A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube assigns to uniquely identify the moderator. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#liveChatModerator\&quot;. | [optional] [default to 'youtube#liveChatModerator']
**snippet** | [**LiveChatModeratorSnippet**](LiveChatModeratorSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_chat_moderator import LiveChatModerator

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatModerator from a JSON string
live_chat_moderator_instance = LiveChatModerator.from_json(json)
# print the JSON string representation of the object
print(LiveChatModerator.to_json())

# convert the object into a dict
live_chat_moderator_dict = live_chat_moderator_instance.to_dict()
# create an instance of LiveChatModerator from a dict
live_chat_moderator_from_dict = LiveChatModerator.from_dict(live_chat_moderator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


