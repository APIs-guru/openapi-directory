# LiveChatModeratorSnippet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live_chat_id** | **str** | The ID of the live chat this moderator can act on. | [optional] 
**moderator_details** | [**ChannelProfileDetails**](ChannelProfileDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_chat_moderator_snippet import LiveChatModeratorSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatModeratorSnippet from a JSON string
live_chat_moderator_snippet_instance = LiveChatModeratorSnippet.from_json(json)
# print the JSON string representation of the object
print(LiveChatModeratorSnippet.to_json())

# convert the object into a dict
live_chat_moderator_snippet_dict = live_chat_moderator_snippet_instance.to_dict()
# create an instance of LiveChatModeratorSnippet from a dict
live_chat_moderator_snippet_from_dict = LiveChatModeratorSnippet.from_dict(live_chat_moderator_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


