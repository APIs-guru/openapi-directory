# TransportSmscGet

The TransportSmsc resource is a collection of transports that carry dispatched alerts to the external Smsc service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**smsc_from** | **str** | The sender (NB: text identity, not a phone number) for the Smsc service. | 
**smsc_login** | **str** | The login for the Smsc service. | 
**smsc_password** | **str** | The API password for the Smsc service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_smsc_get import TransportSmscGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSmscGet from a JSON string
transport_smsc_get_instance = TransportSmscGet.from_json(json)
# print the JSON string representation of the object
print(TransportSmscGet.to_json())

# convert the object into a dict
transport_smsc_get_dict = transport_smsc_get_instance.to_dict()
# create an instance of TransportSmscGet from a dict
transport_smsc_get_from_dict = TransportSmscGet.from_dict(transport_smsc_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


