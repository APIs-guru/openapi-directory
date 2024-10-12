# ScriptActionExecutionSummary

The execution summary of a script action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** | The instance count for a given script action execution status. | [optional] [readonly] 
**status** | **str** | The status of script action execution. | [optional] [readonly] 

## Example

```python
from openapi_client.models.script_action_execution_summary import ScriptActionExecutionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptActionExecutionSummary from a JSON string
script_action_execution_summary_instance = ScriptActionExecutionSummary.from_json(json)
# print the JSON string representation of the object
print(ScriptActionExecutionSummary.to_json())

# convert the object into a dict
script_action_execution_summary_dict = script_action_execution_summary_instance.to_dict()
# create an instance of ScriptActionExecutionSummary from a dict
script_action_execution_summary_from_dict = ScriptActionExecutionSummary.from_dict(script_action_execution_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


