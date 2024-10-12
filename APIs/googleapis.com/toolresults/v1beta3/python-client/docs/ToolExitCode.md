# ToolExitCode

Exit code from a tool execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **int** | Tool execution exit code. A value of 0 means that the execution was successful. - In response: always set - In create/update request: always set | [optional] 

## Example

```python
from openapi_client.models.tool_exit_code import ToolExitCode

# TODO update the JSON string below
json = "{}"
# create an instance of ToolExitCode from a JSON string
tool_exit_code_instance = ToolExitCode.from_json(json)
# print the JSON string representation of the object
print(ToolExitCode.to_json())

# convert the object into a dict
tool_exit_code_dict = tool_exit_code_instance.to_dict()
# create an instance of ToolExitCode from a dict
tool_exit_code_from_dict = ToolExitCode.from_dict(tool_exit_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


