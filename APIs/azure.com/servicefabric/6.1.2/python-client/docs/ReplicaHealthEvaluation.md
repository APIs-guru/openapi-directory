# ReplicaHealthEvaluation

Represents health evaluation for a replica, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition id is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the ids of its partitions would be different. | [optional] 
**replica_or_instance_id** | **str** | Id of a stateful service replica or a stateless service instance. This id is used in the queries that apply to both stateful and stateless services. It is used by Service Fabric to uniquely identify a replica of a partition of a stateful service or an instance of a stateless service partition. It is unique within a partition and does not change for the lifetime of the replica or the instance. If a stateful replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. If a stateless instance is failed over on the same or different node it will get a different value for the id. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.replica_health_evaluation import ReplicaHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaHealthEvaluation from a JSON string
replica_health_evaluation_instance = ReplicaHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ReplicaHealthEvaluation.to_json())

# convert the object into a dict
replica_health_evaluation_dict = replica_health_evaluation_instance.to_dict()
# create an instance of ReplicaHealthEvaluation from a dict
replica_health_evaluation_from_dict = ReplicaHealthEvaluation.from_dict(replica_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


