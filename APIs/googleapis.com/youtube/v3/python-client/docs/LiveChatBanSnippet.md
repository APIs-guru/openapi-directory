# LiveChatBanSnippet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ban_duration_seconds** | **str** | The duration of a ban, only filled if the ban has type TEMPORARY. | [optional] 
**banned_user_details** | [**ChannelProfileDetails**](ChannelProfileDetails.md) |  | [optional] 
**live_chat_id** | **str** | The chat this ban is pertinent to. | [optional] 
**type** | **str** | The type of ban. | [optional] 

## Example

```python
from openapi_client.models.live_chat_ban_snippet import LiveChatBanSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatBanSnippet from a JSON string
live_chat_ban_snippet_instance = LiveChatBanSnippet.from_json(json)
# print the JSON string representation of the object
print(LiveChatBanSnippet.to_json())

# convert the object into a dict
live_chat_ban_snippet_dict = live_chat_ban_snippet_instance.to_dict()
# create an instance of LiveChatBanSnippet from a dict
live_chat_ban_snippet_from_dict = LiveChatBanSnippet.from_dict(live_chat_ban_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


