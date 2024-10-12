# PartitionsHealthEvaluation

Represents health evaluation for the partitions of a service, containing health evaluations for each unhealthy partition that impacts current aggregated health state. Can be returned when evaluating service health and the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_partitions_per_service** | **int** | Maximum allowed percentage of unhealthy partitions per service from the ServiceTypeHealthPolicy. | [optional] 
**total_count** | **int** | Total number of partitions of the service from the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.partitions_health_evaluation import PartitionsHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionsHealthEvaluation from a JSON string
partitions_health_evaluation_instance = PartitionsHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(PartitionsHealthEvaluation.to_json())

# convert the object into a dict
partitions_health_evaluation_dict = partitions_health_evaluation_instance.to_dict()
# create an instance of PartitionsHealthEvaluation from a dict
partitions_health_evaluation_from_dict = PartitionsHealthEvaluation.from_dict(partitions_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


