# StatefulServiceReplicaHealthState

Represents the health state of the stateful service replica, which contains the replica ID and the aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | [optional] 
**replica_id** | **str** | Id of a stateful service replica. ReplicaId is used by Service Fabric to uniquely identify a replica of a partition. It is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. Sometimes the id of a stateless service instance is also referred as a replica id. | [optional] 

## Example

```python
from openapi_client.models.stateful_service_replica_health_state import StatefulServiceReplicaHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceReplicaHealthState from a JSON string
stateful_service_replica_health_state_instance = StatefulServiceReplicaHealthState.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceReplicaHealthState.to_json())

# convert the object into a dict
stateful_service_replica_health_state_dict = stateful_service_replica_health_state_instance.to_dict()
# create an instance of StatefulServiceReplicaHealthState from a dict
stateful_service_replica_health_state_from_dict = StatefulServiceReplicaHealthState.from_dict(stateful_service_replica_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


