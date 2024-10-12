# TransportMessageMediaJsonldGet

The TransportMessageMedia resource is a collection of transports that carry dispatched alerts to the external MessageMedia service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**message_media_api_key** | **str** | The API key for the MessageMedia service. | 
**message_media_api_secret** | **str** | The API secret for the MessageMedia service. Stored in encrypted format. | 
**message_media_from** | **str** | The optional registered sender ID for the MessageMedia service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_message_media_jsonld_get import TransportMessageMediaJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMessageMediaJsonldGet from a JSON string
transport_message_media_jsonld_get_instance = TransportMessageMediaJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportMessageMediaJsonldGet.to_json())

# convert the object into a dict
transport_message_media_jsonld_get_dict = transport_message_media_jsonld_get_instance.to_dict()
# create an instance of TransportMessageMediaJsonldGet from a dict
transport_message_media_jsonld_get_from_dict = TransportMessageMediaJsonldGet.from_dict(transport_message_media_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


