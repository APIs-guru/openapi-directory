# HyperVReplica2012R2EventDetails

Model class for event details of a HyperVReplica blue E2E event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | The container friendly name. | [optional] 
**fabric_name** | **str** | The fabric friendly name. | [optional] 
**remote_container_name** | **str** | The remote container name. | [optional] 
**remote_fabric_name** | **str** | The remote fabric name. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica2012_r2_event_details import HyperVReplica2012R2EventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplica2012R2EventDetails from a JSON string
hyper_v_replica2012_r2_event_details_instance = HyperVReplica2012R2EventDetails.from_json(json)
# print the JSON string representation of the object
print(HyperVReplica2012R2EventDetails.to_json())

# convert the object into a dict
hyper_v_replica2012_r2_event_details_dict = hyper_v_replica2012_r2_event_details_instance.to_dict()
# create an instance of HyperVReplica2012R2EventDetails from a dict
hyper_v_replica2012_r2_event_details_from_dict = HyperVReplica2012R2EventDetails.from_dict(hyper_v_replica2012_r2_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


