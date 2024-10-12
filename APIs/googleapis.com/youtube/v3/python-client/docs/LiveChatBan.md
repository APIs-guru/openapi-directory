# LiveChatBan

A `__liveChatBan__` resource represents a ban for a YouTube live chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube assigns to uniquely identify the ban. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;youtube#liveChatBan\&quot;&#x60;. | [optional] [default to 'youtube#liveChatBan']
**snippet** | [**LiveChatBanSnippet**](LiveChatBanSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_chat_ban import LiveChatBan

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatBan from a JSON string
live_chat_ban_instance = LiveChatBan.from_json(json)
# print the JSON string representation of the object
print(LiveChatBan.to_json())

# convert the object into a dict
live_chat_ban_dict = live_chat_ban_instance.to_dict()
# create an instance of LiveChatBan from a dict
live_chat_ban_from_dict = LiveChatBan.from_dict(live_chat_ban_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


