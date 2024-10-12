# TransportSmsmodeGet

The TransportSmsmode resource is a collection of transports that carry dispatched alerts to the external Smsmode service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**smsmode_api_key** | **str** | The API key for the Smsmode service. Stored in encrypted format. | 
**smsmode_from** | **str** | The from value for the Smsmode service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_smsmode_get import TransportSmsmodeGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSmsmodeGet from a JSON string
transport_smsmode_get_instance = TransportSmsmodeGet.from_json(json)
# print the JSON string representation of the object
print(TransportSmsmodeGet.to_json())

# convert the object into a dict
transport_smsmode_get_dict = transport_smsmode_get_instance.to_dict()
# create an instance of TransportSmsmodeGet from a dict
transport_smsmode_get_from_dict = TransportSmsmodeGet.from_dict(transport_smsmode_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


