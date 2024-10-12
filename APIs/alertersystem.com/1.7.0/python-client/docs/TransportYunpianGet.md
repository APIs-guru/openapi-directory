# TransportYunpianGet

The TransportYunpian resource is a collection of transports that carry dispatched alerts to the external Yunpian service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**yunpian_api_key** | **str** | The API key for the Yunpian service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_yunpian_get import TransportYunpianGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportYunpianGet from a JSON string
transport_yunpian_get_instance = TransportYunpianGet.from_json(json)
# print the JSON string representation of the object
print(TransportYunpianGet.to_json())

# convert the object into a dict
transport_yunpian_get_dict = transport_yunpian_get_instance.to_dict()
# create an instance of TransportYunpianGet from a dict
transport_yunpian_get_from_dict = TransportYunpianGet.from_dict(transport_yunpian_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


