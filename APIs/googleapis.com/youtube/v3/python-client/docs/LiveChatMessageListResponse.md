# LiveChatMessageListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[LiveChatMessage]**](LiveChatMessage.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#liveChatMessageListResponse\&quot;. | [optional] [default to 'youtube#liveChatMessageListResponse']
**next_page_token** | **str** |  | [optional] 
**offline_at** | **datetime** | The date and time when the underlying stream went offline. | [optional] 
**page_info** | [**PageInfo**](PageInfo.md) |  | [optional] 
**polling_interval_millis** | **int** | The amount of time the client should wait before polling again. | [optional] 
**token_pagination** | **object** | Stub token pagination template to suppress results. | [optional] 
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.live_chat_message_list_response import LiveChatMessageListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatMessageListResponse from a JSON string
live_chat_message_list_response_instance = LiveChatMessageListResponse.from_json(json)
# print the JSON string representation of the object
print(LiveChatMessageListResponse.to_json())

# convert the object into a dict
live_chat_message_list_response_dict = live_chat_message_list_response_instance.to_dict()
# create an instance of LiveChatMessageListResponse from a dict
live_chat_message_list_response_from_dict = LiveChatMessageListResponse.from_dict(live_chat_message_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


