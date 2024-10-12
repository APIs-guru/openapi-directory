# TransportIqsmsJsonldGet

The TransportIqsms resource is a collection of transports that carry dispatched alerts to the external Iqsms service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**iqsms_from** | **str** | The sender value for the Iqsms service. | 
**iqsms_login** | **str** | The login for the Iqsms service. | 
**iqsms_password** | **str** | The password for the Iqsms service. Stored in encrypted format. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_iqsms_jsonld_get import TransportIqsmsJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportIqsmsJsonldGet from a JSON string
transport_iqsms_jsonld_get_instance = TransportIqsmsJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportIqsmsJsonldGet.to_json())

# convert the object into a dict
transport_iqsms_jsonld_get_dict = transport_iqsms_jsonld_get_instance.to_dict()
# create an instance of TransportIqsmsJsonldGet from a dict
transport_iqsms_jsonld_get_from_dict = TransportIqsmsJsonldGet.from_dict(transport_iqsms_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


