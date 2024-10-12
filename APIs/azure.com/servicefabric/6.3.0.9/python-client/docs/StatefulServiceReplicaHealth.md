# StatefulServiceReplicaHealth

Represents the health of the stateful service replica. Contains the replica aggregated health state, the health events and the unhealthy evaluations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**replica_id** | **str** | Id of a stateful service replica. ReplicaId is used by Service Fabric to uniquely identify a replica of a partition. It is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. Sometimes the id of a stateless service instance is also referred as a replica id. | [optional] 

## Example

```python
from openapi_client.models.stateful_service_replica_health import StatefulServiceReplicaHealth

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceReplicaHealth from a JSON string
stateful_service_replica_health_instance = StatefulServiceReplicaHealth.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceReplicaHealth.to_json())

# convert the object into a dict
stateful_service_replica_health_dict = stateful_service_replica_health_instance.to_dict()
# create an instance of StatefulServiceReplicaHealth from a dict
stateful_service_replica_health_from_dict = StatefulServiceReplicaHealth.from_dict(stateful_service_replica_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


