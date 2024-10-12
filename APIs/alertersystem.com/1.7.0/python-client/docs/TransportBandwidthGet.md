# TransportBandwidthGet

The TransportBandwidth resource is a collection of transports that carry dispatched alerts to the external Bandwidth service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_account_id** | **str** | The account ID value for the Bandwidth service. | 
**bandwidth_application_id** | **str** | The application ID value for the Bandwidth service. | 
**bandwidth_from** | **str** | The from value for the Bandwidth service. | 
**bandwidth_password** | **str** | The password for the Bandwidth service. Stored in encrypted format. | 
**bandwidth_username** | **str** | The username for the Bandwidth service. | 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_bandwidth_get import TransportBandwidthGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportBandwidthGet from a JSON string
transport_bandwidth_get_instance = TransportBandwidthGet.from_json(json)
# print the JSON string representation of the object
print(TransportBandwidthGet.to_json())

# convert the object into a dict
transport_bandwidth_get_dict = transport_bandwidth_get_instance.to_dict()
# create an instance of TransportBandwidthGet from a dict
transport_bandwidth_get_from_dict = TransportBandwidthGet.from_dict(transport_bandwidth_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


