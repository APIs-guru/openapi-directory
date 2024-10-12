# ScriptActionsGetExecutionDetail200ResponseAllOfExecutionSummaryInner

The execution summary of a script action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** | The instance count for a given script action execution status. | [optional] [readonly] 
**status** | **str** | The status of script action execution. | [optional] [readonly] 

## Example

```python
from openapi_client.models.script_actions_get_execution_detail200_response_all_of_execution_summary_inner import ScriptActionsGetExecutionDetail200ResponseAllOfExecutionSummaryInner

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptActionsGetExecutionDetail200ResponseAllOfExecutionSummaryInner from a JSON string
script_actions_get_execution_detail200_response_all_of_execution_summary_inner_instance = ScriptActionsGetExecutionDetail200ResponseAllOfExecutionSummaryInner.from_json(json)
# print the JSON string representation of the object
print(ScriptActionsGetExecutionDetail200ResponseAllOfExecutionSummaryInner.to_json())

# convert the object into a dict
script_actions_get_execution_detail200_response_all_of_execution_summary_inner_dict = script_actions_get_execution_detail200_response_all_of_execution_summary_inner_instance.to_dict()
# create an instance of ScriptActionsGetExecutionDetail200ResponseAllOfExecutionSummaryInner from a dict
script_actions_get_execution_detail200_response_all_of_execution_summary_inner_from_dict = ScriptActionsGetExecutionDetail200ResponseAllOfExecutionSummaryInner.from_dict(script_actions_get_execution_detail200_response_all_of_execution_summary_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


