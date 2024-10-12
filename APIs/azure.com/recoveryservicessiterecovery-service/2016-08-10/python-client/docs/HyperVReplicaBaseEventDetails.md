# HyperVReplicaBaseEventDetails

Abstract model class for event details of a HyperVReplica E2E event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | The container friendly name. | [optional] 
**fabric_name** | **str** | The fabric friendly name. | [optional] 
**remote_container_name** | **str** | The remote container name. | [optional] 
**remote_fabric_name** | **str** | The remote fabric name. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_base_event_details import HyperVReplicaBaseEventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaBaseEventDetails from a JSON string
hyper_v_replica_base_event_details_instance = HyperVReplicaBaseEventDetails.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaBaseEventDetails.to_json())

# convert the object into a dict
hyper_v_replica_base_event_details_dict = hyper_v_replica_base_event_details_instance.to_dict()
# create an instance of HyperVReplicaBaseEventDetails from a dict
hyper_v_replica_base_event_details_from_dict = HyperVReplicaBaseEventDetails.from_dict(hyper_v_replica_base_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


