# TransportSimpleTextinJsonldGet

The TransportSimpleTextin resource is a collection of transports that carry dispatched alerts to the external SimpleTextin service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**simple_textin_api_key** | **str** | The API key for the SimpleTextin service. Stored in encrypted format. | 
**simple_textin_from** | **str** | The from value for the SimpleTextin service. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_simple_textin_jsonld_get import TransportSimpleTextinJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSimpleTextinJsonldGet from a JSON string
transport_simple_textin_jsonld_get_instance = TransportSimpleTextinJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportSimpleTextinJsonldGet.to_json())

# convert the object into a dict
transport_simple_textin_jsonld_get_dict = transport_simple_textin_jsonld_get_instance.to_dict()
# create an instance of TransportSimpleTextinJsonldGet from a dict
transport_simple_textin_jsonld_get_from_dict = TransportSimpleTextinJsonldGet.from_dict(transport_simple_textin_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


