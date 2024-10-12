# PowerShellTabCompletionResults

An array of strings representing the different values that can be selected through.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.power_shell_tab_completion_results import PowerShellTabCompletionResults

# TODO update the JSON string below
json = "{}"
# create an instance of PowerShellTabCompletionResults from a JSON string
power_shell_tab_completion_results_instance = PowerShellTabCompletionResults.from_json(json)
# print the JSON string representation of the object
print(PowerShellTabCompletionResults.to_json())

# convert the object into a dict
power_shell_tab_completion_results_dict = power_shell_tab_completion_results_instance.to_dict()
# create an instance of PowerShellTabCompletionResults from a dict
power_shell_tab_completion_results_from_dict = PowerShellTabCompletionResults.from_dict(power_shell_tab_completion_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


