# ReplicaHealth

Represents a base class for stateful service replica or stateless service instance health. Contains the replica aggregated health state, the health events and the unhealthy evaluations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.replica_health import ReplicaHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaHealth from a JSON string
replica_health_instance = ReplicaHealth.from_json(json)
# print the JSON string representation of the object
print(ReplicaHealth.to_json())

# convert the object into a dict
replica_health_dict = replica_health_instance.to_dict()
# create an instance of ReplicaHealth from a dict
replica_health_from_dict = ReplicaHealth.from_dict(replica_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


