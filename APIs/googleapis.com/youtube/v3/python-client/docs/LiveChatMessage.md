# LiveChatMessage

A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_details** | [**LiveChatMessageAuthorDetails**](LiveChatMessageAuthorDetails.md) |  | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube assigns to uniquely identify the message. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#liveChatMessage\&quot;. | [optional] [default to 'youtube#liveChatMessage']
**snippet** | [**LiveChatMessageSnippet**](LiveChatMessageSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_chat_message import LiveChatMessage

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatMessage from a JSON string
live_chat_message_instance = LiveChatMessage.from_json(json)
# print the JSON string representation of the object
print(LiveChatMessage.to_json())

# convert the object into a dict
live_chat_message_dict = live_chat_message_instance.to_dict()
# create an instance of LiveChatMessage from a dict
live_chat_message_from_dict = LiveChatMessage.from_dict(live_chat_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


