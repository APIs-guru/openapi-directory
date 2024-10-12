# HealthEvaluationWrapper

Wrapper object for health evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_evaluation** | [**HealthEvaluation**](HealthEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.health_evaluation_wrapper import HealthEvaluationWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of HealthEvaluationWrapper from a JSON string
health_evaluation_wrapper_instance = HealthEvaluationWrapper.from_json(json)
# print the JSON string representation of the object
print(HealthEvaluationWrapper.to_json())

# convert the object into a dict
health_evaluation_wrapper_dict = health_evaluation_wrapper_instance.to_dict()
# create an instance of HealthEvaluationWrapper from a dict
health_evaluation_wrapper_from_dict = HealthEvaluationWrapper.from_dict(health_evaluation_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


