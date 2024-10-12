# ReplicasHealthEvaluation

The evaluation of the replicas health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_partitions_per_service** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.replicas_health_evaluation import ReplicasHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicasHealthEvaluation from a JSON string
replicas_health_evaluation_instance = ReplicasHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ReplicasHealthEvaluation.to_json())

# convert the object into a dict
replicas_health_evaluation_dict = replicas_health_evaluation_instance.to_dict()
# create an instance of ReplicasHealthEvaluation from a dict
replicas_health_evaluation_from_dict = ReplicasHealthEvaluation.from_dict(replicas_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


