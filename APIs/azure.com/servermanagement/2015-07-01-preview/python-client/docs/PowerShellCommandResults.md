# PowerShellCommandResults

A collection of results from a PowerShell command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** |  | [optional] 
**completed** | **bool** |  | [optional] 
**pssession** | **str** |  | [optional] 
**results** | [**List[PowerShellCommandResult]**](PowerShellCommandResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.power_shell_command_results import PowerShellCommandResults

# TODO update the JSON string below
json = "{}"
# create an instance of PowerShellCommandResults from a JSON string
power_shell_command_results_instance = PowerShellCommandResults.from_json(json)
# print the JSON string representation of the object
print(PowerShellCommandResults.to_json())

# convert the object into a dict
power_shell_command_results_dict = power_shell_command_results_instance.to_dict()
# create an instance of PowerShellCommandResults from a dict
power_shell_command_results_from_dict = PowerShellCommandResults.from_dict(power_shell_command_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


