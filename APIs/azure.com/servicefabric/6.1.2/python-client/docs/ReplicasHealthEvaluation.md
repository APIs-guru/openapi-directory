# ReplicasHealthEvaluation

Represents health evaluation for replicas, containing health evaluations for each unhealthy replica that impacted current aggregated health state. Can be returned when evaluating partition health and the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_replicas_per_partition** | **int** | Maximum allowed percentage of unhealthy replicas per partition from the ApplicationHealthPolicy. | [optional] 
**total_count** | **int** | Total number of replicas in the partition from the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

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


