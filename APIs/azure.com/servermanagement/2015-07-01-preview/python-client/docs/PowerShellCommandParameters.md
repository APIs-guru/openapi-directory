# PowerShellCommandParameters

The parameters to a PowerShell script execution command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PowerShellCommandParametersProperties**](PowerShellCommandParametersProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.power_shell_command_parameters import PowerShellCommandParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PowerShellCommandParameters from a JSON string
power_shell_command_parameters_instance = PowerShellCommandParameters.from_json(json)
# print the JSON string representation of the object
print(PowerShellCommandParameters.to_json())

# convert the object into a dict
power_shell_command_parameters_dict = power_shell_command_parameters_instance.to_dict()
# create an instance of PowerShellCommandParameters from a dict
power_shell_command_parameters_from_dict = PowerShellCommandParameters.from_dict(power_shell_command_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


