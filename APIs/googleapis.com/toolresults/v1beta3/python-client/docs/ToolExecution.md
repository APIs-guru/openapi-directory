# ToolExecution

An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line_arguments** | **List[str]** | The full tokenized command line including the program name (equivalent to argv in a C program). - In response: present if set by create request - In create request: optional - In update request: never set | [optional] 
**exit_code** | [**ToolExitCode**](ToolExitCode.md) |  | [optional] 
**tool_logs** | [**List[FileReference]**](FileReference.md) | References to any plain text logs output the tool execution. This field can be set before the tool has exited in order to be able to have access to a live view of the logs while the tool is running. The maximum allowed number of tool logs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list | [optional] 
**tool_outputs** | [**List[ToolOutputReference]**](ToolOutputReference.md) | References to opaque files of any format output by the tool execution. The maximum allowed number of tool outputs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list | [optional] 

## Example

```python
from openapi_client.models.tool_execution import ToolExecution

# TODO update the JSON string below
json = "{}"
# create an instance of ToolExecution from a JSON string
tool_execution_instance = ToolExecution.from_json(json)
# print the JSON string representation of the object
print(ToolExecution.to_json())

# convert the object into a dict
tool_execution_dict = tool_execution_instance.to_dict()
# create an instance of ToolExecution from a dict
tool_execution_from_dict = ToolExecution.from_dict(tool_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


