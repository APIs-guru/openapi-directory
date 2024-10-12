# TransportOvhCloudGet

The TransportOvhCloud resource is a collection of transports that carry dispatched alerts to the external OVHcloud service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**ovh_cloud_application_key** | **str** | The application key for the OVHcloud service. | 
**ovh_cloud_application_secret** | **str** | The application secret for the OVHcloud service. Stored in encrypted format. | 
**ovh_cloud_consumer_key** | **str** | The consumer key for the OVHcloud service. | 
**ovh_cloud_sender** | **str** | The optional sender for the OVHcloud service. | [optional] 
**ovh_cloud_service_name** | **str** | The service name for the OVHcloud service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_ovh_cloud_get import TransportOvhCloudGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportOvhCloudGet from a JSON string
transport_ovh_cloud_get_instance = TransportOvhCloudGet.from_json(json)
# print the JSON string representation of the object
print(TransportOvhCloudGet.to_json())

# convert the object into a dict
transport_ovh_cloud_get_dict = transport_ovh_cloud_get_instance.to_dict()
# create an instance of TransportOvhCloudGet from a dict
transport_ovh_cloud_get_from_dict = TransportOvhCloudGet.from_dict(transport_ovh_cloud_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


