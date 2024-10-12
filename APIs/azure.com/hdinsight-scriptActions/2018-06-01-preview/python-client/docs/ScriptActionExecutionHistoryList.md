# ScriptActionExecutionHistoryList

The list script execution history response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[ClusterListRuntimeScriptActionDetailResultValueInner]**](ClusterListRuntimeScriptActionDetailResultValueInner.md) | The list of persisted script action details for the cluster. | [optional] [readonly] 

## Example

```python
from openapi_client.models.script_action_execution_history_list import ScriptActionExecutionHistoryList

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptActionExecutionHistoryList from a JSON string
script_action_execution_history_list_instance = ScriptActionExecutionHistoryList.from_json(json)
# print the JSON string representation of the object
print(ScriptActionExecutionHistoryList.to_json())

# convert the object into a dict
script_action_execution_history_list_dict = script_action_execution_history_list_instance.to_dict()
# create an instance of ScriptActionExecutionHistoryList from a dict
script_action_execution_history_list_from_dict = ScriptActionExecutionHistoryList.from_dict(script_action_execution_history_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


