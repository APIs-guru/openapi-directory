# SuperChatEventListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[SuperChatEvent]**](SuperChatEvent.md) | A list of Super Chat purchases that match the request criteria. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#superChatEventListResponse\&quot;. | [optional] [default to 'youtube#superChatEventListResponse']
**next_page_token** | **str** | The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. | [optional] 
**page_info** | [**PageInfo**](PageInfo.md) |  | [optional] 
**token_pagination** | **object** | Stub token pagination template to suppress results. | [optional] 
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.super_chat_event_list_response import SuperChatEventListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SuperChatEventListResponse from a JSON string
super_chat_event_list_response_instance = SuperChatEventListResponse.from_json(json)
# print the JSON string representation of the object
print(SuperChatEventListResponse.to_json())

# convert the object into a dict
super_chat_event_list_response_dict = super_chat_event_list_response_instance.to_dict()
# create an instance of SuperChatEventListResponse from a dict
super_chat_event_list_response_from_dict = SuperChatEventListResponse.from_dict(super_chat_event_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


