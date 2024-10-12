# ClusterListRuntimeScriptActionDetailResultValueInner

The execution details of a script action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The application name of the script action, if any. | [optional] [readonly] 
**name** | **str** | The name of the script action. | 
**parameters** | **str** | The parameters for the script | [optional] 
**roles** | **List[str]** | The list of roles where script will be executed. | 
**uri** | **str** | The URI to the script. | 
**debug_information** | **str** | The script action execution debug information. | [optional] [readonly] 
**end_time** | **str** | The end time of script action execution. | [optional] [readonly] 
**execution_summary** | [**List[ScriptActionsGetExecutionDetail200ResponseAllOfExecutionSummaryInner]**](ScriptActionsGetExecutionDetail200ResponseAllOfExecutionSummaryInner.md) | The summary of script action execution result. | [optional] [readonly] 
**operation** | **str** | The reason why the script action was executed. | [optional] [readonly] 
**script_execution_id** | **int** | The execution id of the script action. | [optional] [readonly] 
**start_time** | **str** | The start time of script action execution. | [optional] [readonly] 
**status** | **str** | The current execution status of the script action. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_list_runtime_script_action_detail_result_value_inner import ClusterListRuntimeScriptActionDetailResultValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterListRuntimeScriptActionDetailResultValueInner from a JSON string
cluster_list_runtime_script_action_detail_result_value_inner_instance = ClusterListRuntimeScriptActionDetailResultValueInner.from_json(json)
# print the JSON string representation of the object
print(ClusterListRuntimeScriptActionDetailResultValueInner.to_json())

# convert the object into a dict
cluster_list_runtime_script_action_detail_result_value_inner_dict = cluster_list_runtime_script_action_detail_result_value_inner_instance.to_dict()
# create an instance of ClusterListRuntimeScriptActionDetailResultValueInner from a dict
cluster_list_runtime_script_action_detail_result_value_inner_from_dict = ClusterListRuntimeScriptActionDetailResultValueInner.from_dict(cluster_list_runtime_script_action_detail_result_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


