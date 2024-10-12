# PartitionHealth

Information about the health of a Service Fabric partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition id is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the ids of its partitions would be different. | [optional] 
**replica_health_states** | [**List[ReplicaHealthState]**](ReplicaHealthState.md) | The list of replica health states associated with the partition. | [optional] 

## Example

```python
from openapi_client.models.partition_health import PartitionHealth

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionHealth from a JSON string
partition_health_instance = PartitionHealth.from_json(json)
# print the JSON string representation of the object
print(PartitionHealth.to_json())

# convert the object into a dict
partition_health_dict = partition_health_instance.to_dict()
# create an instance of PartitionHealth from a dict
partition_health_from_dict = PartitionHealth.from_dict(partition_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


