# ToolResultsStep

Represents a tool results step resource. This has the results of a TestExecution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_id** | **str** | Output only. A tool results execution ID. | [optional] 
**history_id** | **str** | Output only. A tool results history ID. | [optional] 
**project_id** | **str** | Output only. The cloud project that owns the tool results step. | [optional] 
**step_id** | **str** | Output only. A tool results step ID. | [optional] 

## Example

```python
from openapi_client.models.tool_results_step import ToolResultsStep

# TODO update the JSON string below
json = "{}"
# create an instance of ToolResultsStep from a JSON string
tool_results_step_instance = ToolResultsStep.from_json(json)
# print the JSON string representation of the object
print(ToolResultsStep.to_json())

# convert the object into a dict
tool_results_step_dict = tool_results_step_instance.to_dict()
# create an instance of ToolResultsStep from a dict
tool_results_step_from_dict = ToolResultsStep.from_dict(tool_results_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


