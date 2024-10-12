# ReplicaHealthState

Represents a base class for stateful service replica or stateless service instance health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | [optional] 

## Example

```python
from openapi_client.models.replica_health_state import ReplicaHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaHealthState from a JSON string
replica_health_state_instance = ReplicaHealthState.from_json(json)
# print the JSON string representation of the object
print(ReplicaHealthState.to_json())

# convert the object into a dict
replica_health_state_dict = replica_health_state_instance.to_dict()
# create an instance of ReplicaHealthState from a dict
replica_health_state_from_dict = ReplicaHealthState.from_dict(replica_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


