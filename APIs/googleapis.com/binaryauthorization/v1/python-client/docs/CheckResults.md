# CheckResults

Result of evaluating one or more checks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[CheckResult]**](CheckResult.md) | Per-check details. | [optional] 

## Example

```python
from openapi_client.models.check_results import CheckResults

# TODO update the JSON string below
json = "{}"
# create an instance of CheckResults from a JSON string
check_results_instance = CheckResults.from_json(json)
# print the JSON string representation of the object
print(CheckResults.to_json())

# convert the object into a dict
check_results_dict = check_results_instance.to_dict()
# create an instance of CheckResults from a dict
check_results_from_dict = CheckResults.from_dict(check_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


