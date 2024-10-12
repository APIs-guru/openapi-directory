# EvaluationResult

Result of evaluating one check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verdict** | **str** | The result of evaluating this check. | [optional] 

## Example

```python
from openapi_client.models.evaluation_result import EvaluationResult

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluationResult from a JSON string
evaluation_result_instance = EvaluationResult.from_json(json)
# print the JSON string representation of the object
print(EvaluationResult.to_json())

# convert the object into a dict
evaluation_result_dict = evaluation_result_instance.to_dict()
# create an instance of EvaluationResult from a dict
evaluation_result_from_dict = EvaluationResult.from_dict(evaluation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


