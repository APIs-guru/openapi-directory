# PowerShellCommandParametersProperties

Collection of properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | Script to execute. | [optional] 

## Example

```python
from openapi_client.models.power_shell_command_parameters_properties import PowerShellCommandParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PowerShellCommandParametersProperties from a JSON string
power_shell_command_parameters_properties_instance = PowerShellCommandParametersProperties.from_json(json)
# print the JSON string representation of the object
print(PowerShellCommandParametersProperties.to_json())

# convert the object into a dict
power_shell_command_parameters_properties_dict = power_shell_command_parameters_properties_instance.to_dict()
# create an instance of PowerShellCommandParametersProperties from a dict
power_shell_command_parameters_properties_from_dict = PowerShellCommandParametersProperties.from_dict(power_shell_command_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


