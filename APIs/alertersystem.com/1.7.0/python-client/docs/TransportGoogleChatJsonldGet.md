# TransportGoogleChatJsonldGet

The TransportGoogleChat resource is a collection of transports that carry dispatched alerts to the external Google Chat service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**google_chat_access_key** | **str** | The access key for the Google Chat service. | 
**google_chat_access_token** | **str** | The access token for the Google Chat service. Stored in encrypted format. | 
**google_chat_space** | **str** | The space name for the Google Chat service. | 
**google_chat_thread_key** | **str** | The optional thread key for the Google Chat service. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_google_chat_jsonld_get import TransportGoogleChatJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportGoogleChatJsonldGet from a JSON string
transport_google_chat_jsonld_get_instance = TransportGoogleChatJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportGoogleChatJsonldGet.to_json())

# convert the object into a dict
transport_google_chat_jsonld_get_dict = transport_google_chat_jsonld_get_instance.to_dict()
# create an instance of TransportGoogleChatJsonldGet from a dict
transport_google_chat_jsonld_get_from_dict = TransportGoogleChatJsonldGet.from_dict(transport_google_chat_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


