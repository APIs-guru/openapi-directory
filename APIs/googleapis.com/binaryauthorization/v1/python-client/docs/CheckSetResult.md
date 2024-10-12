# CheckSetResult

Result of evaluating one check set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist_result** | [**AllowlistResult**](AllowlistResult.md) |  | [optional] 
**check_results** | [**CheckResults**](CheckResults.md) |  | [optional] 
**display_name** | **str** | The name of the check set. | [optional] 
**explanation** | **str** | Explanation of this check set result. Only populated if no checks were evaluated. | [optional] 
**index** | **str** | The index of the check set. | [optional] 
**scope** | [**Scope**](Scope.md) |  | [optional] 

## Example

```python
from openapi_client.models.check_set_result import CheckSetResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckSetResult from a JSON string
check_set_result_instance = CheckSetResult.from_json(json)
# print the JSON string representation of the object
print(CheckSetResult.to_json())

# convert the object into a dict
check_set_result_dict = check_set_result_instance.to_dict()
# create an instance of CheckSetResult from a dict
check_set_result_from_dict = CheckSetResult.from_dict(check_set_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


