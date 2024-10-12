# ReplicaHealthEvaluation

The evaluation of the replica health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** |  | [optional] 
**replica_or_instance_id** | **str** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

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


