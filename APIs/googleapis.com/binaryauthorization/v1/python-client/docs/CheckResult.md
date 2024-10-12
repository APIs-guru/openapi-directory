# CheckResult

Result of evaluating one check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist_result** | [**AllowlistResult**](AllowlistResult.md) |  | [optional] 
**display_name** | **str** | The name of the check. | [optional] 
**evaluation_result** | [**EvaluationResult**](EvaluationResult.md) |  | [optional] 
**explanation** | **str** | Explanation of this check result. | [optional] 
**index** | **str** | The index of the check. | [optional] 
**type** | **str** | The type of the check. | [optional] 

## Example

```python
from openapi_client.models.check_result import CheckResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckResult from a JSON string
check_result_instance = CheckResult.from_json(json)
# print the JSON string representation of the object
print(CheckResult.to_json())

# convert the object into a dict
check_result_dict = check_result_instance.to_dict()
# create an instance of CheckResult from a dict
check_result_from_dict = CheckResult.from_dict(check_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


