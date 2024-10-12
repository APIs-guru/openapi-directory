# PowerShellTabCompletionParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | Command to get tab completion for. | [optional] 

## Example

```python
from openapi_client.models.power_shell_tab_completion_parameters import PowerShellTabCompletionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PowerShellTabCompletionParameters from a JSON string
power_shell_tab_completion_parameters_instance = PowerShellTabCompletionParameters.from_json(json)
# print the JSON string representation of the object
print(PowerShellTabCompletionParameters.to_json())

# convert the object into a dict
power_shell_tab_completion_parameters_dict = power_shell_tab_completion_parameters_instance.to_dict()
# create an instance of PowerShellTabCompletionParameters from a dict
power_shell_tab_completion_parameters_from_dict = PowerShellTabCompletionParameters.from_dict(power_shell_tab_completion_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


