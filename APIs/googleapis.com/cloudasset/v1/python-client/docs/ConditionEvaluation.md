# ConditionEvaluation

The condition evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_value** | **str** | The evaluation result. | [optional] 

## Example

```python
from openapi_client.models.condition_evaluation import ConditionEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionEvaluation from a JSON string
condition_evaluation_instance = ConditionEvaluation.from_json(json)
# print the JSON string representation of the object
print(ConditionEvaluation.to_json())

# convert the object into a dict
condition_evaluation_dict = condition_evaluation_instance.to_dict()
# create an instance of ConditionEvaluation from a dict
condition_evaluation_from_dict = ConditionEvaluation.from_dict(condition_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


