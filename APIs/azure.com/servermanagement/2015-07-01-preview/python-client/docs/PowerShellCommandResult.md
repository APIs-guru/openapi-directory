# PowerShellCommandResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | **str** | The HTML color string representing the background color. | [optional] 
**caption** | **str** | Text that precedes the prompt. | [optional] 
**descriptions** | [**List[PromptFieldDescription]**](PromptFieldDescription.md) | Collection of PromptFieldDescription objects that contains the user input | [optional] 
**exit_code** | **int** | The exit code from a executable that was called from PowerShell. | [optional] 
**foreground_color** | **str** | The HTML color string representing the foreground color. | [optional] 
**id** | **int** | ID of the prompt message. | [optional] 
**message** | **str** | Text of the prompt. | [optional] 
**message_type** | **int** | The type of message. | [optional] 
**prompt** | **str** | The interactive prompt message. | [optional] 
**value** | **str** | Actual result text from the PowerShell Command. | [optional] 

## Example

```python
from openapi_client.models.power_shell_command_result import PowerShellCommandResult

# TODO update the JSON string below
json = "{}"
# create an instance of PowerShellCommandResult from a JSON string
power_shell_command_result_instance = PowerShellCommandResult.from_json(json)
# print the JSON string representation of the object
print(PowerShellCommandResult.to_json())

# convert the object into a dict
power_shell_command_result_dict = power_shell_command_result_instance.to_dict()
# create an instance of PowerShellCommandResult from a dict
power_shell_command_result_from_dict = PowerShellCommandResult.from_dict(power_shell_command_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


