# ToolResultsExecution

Represents a tool results execution resource. This has the results of a TestMatrix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_id** | **str** | Output only. A tool results execution ID. | [optional] 
**history_id** | **str** | Output only. A tool results history ID. | [optional] 
**project_id** | **str** | Output only. The cloud project that owns the tool results execution. | [optional] 

## Example

```python
from openapi_client.models.tool_results_execution import ToolResultsExecution

# TODO update the JSON string below
json = "{}"
# create an instance of ToolResultsExecution from a JSON string
tool_results_execution_instance = ToolResultsExecution.from_json(json)
# print the JSON string representation of the object
print(ToolResultsExecution.to_json())

# convert the object into a dict
tool_results_execution_dict = tool_results_execution_instance.to_dict()
# create an instance of ToolResultsExecution from a dict
tool_results_execution_from_dict = ToolResultsExecution.from_dict(tool_results_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


