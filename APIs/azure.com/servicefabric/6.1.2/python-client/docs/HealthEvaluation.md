# HealthEvaluation

Represents a health evaluation which describes the data and the algorithm used by health manager to evaluate the health of an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**description** | **str** | Description of the health evaluation, which represents a summary of the evaluation process. | [optional] 
**kind** | [**HealthEvaluationKind**](HealthEvaluationKind.md) |  | 

## Example

```python
from openapi_client.models.health_evaluation import HealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of HealthEvaluation from a JSON string
health_evaluation_instance = HealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(HealthEvaluation.to_json())

# convert the object into a dict
health_evaluation_dict = health_evaluation_instance.to_dict()
# create an instance of HealthEvaluation from a dict
health_evaluation_from_dict = HealthEvaluation.from_dict(health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


