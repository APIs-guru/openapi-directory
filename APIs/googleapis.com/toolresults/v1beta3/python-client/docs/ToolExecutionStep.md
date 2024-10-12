# ToolExecutionStep

Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tool_execution** | [**ToolExecution**](ToolExecution.md) |  | [optional] 

## Example

```python
from openapi_client.models.tool_execution_step import ToolExecutionStep

# TODO update the JSON string below
json = "{}"
# create an instance of ToolExecutionStep from a JSON string
tool_execution_step_instance = ToolExecutionStep.from_json(json)
# print the JSON string representation of the object
print(ToolExecutionStep.to_json())

# convert the object into a dict
tool_execution_step_dict = tool_execution_step_instance.to_dict()
# create an instance of ToolExecutionStep from a dict
tool_execution_step_from_dict = ToolExecutionStep.from_dict(tool_execution_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


