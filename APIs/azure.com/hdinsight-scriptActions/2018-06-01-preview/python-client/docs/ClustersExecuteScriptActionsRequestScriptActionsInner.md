# ClustersExecuteScriptActionsRequestScriptActionsInner

Describes a script action on a running cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The application name of the script action, if any. | [optional] [readonly] 
**name** | **str** | The name of the script action. | 
**parameters** | **str** | The parameters for the script | [optional] 
**roles** | **List[str]** | The list of roles where script will be executed. | 
**uri** | **str** | The URI to the script. | 

## Example

```python
from openapi_client.models.clusters_execute_script_actions_request_script_actions_inner import ClustersExecuteScriptActionsRequestScriptActionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ClustersExecuteScriptActionsRequestScriptActionsInner from a JSON string
clusters_execute_script_actions_request_script_actions_inner_instance = ClustersExecuteScriptActionsRequestScriptActionsInner.from_json(json)
# print the JSON string representation of the object
print(ClustersExecuteScriptActionsRequestScriptActionsInner.to_json())

# convert the object into a dict
clusters_execute_script_actions_request_script_actions_inner_dict = clusters_execute_script_actions_request_script_actions_inner_instance.to_dict()
# create an instance of ClustersExecuteScriptActionsRequestScriptActionsInner from a dict
clusters_execute_script_actions_request_script_actions_inner_from_dict = ClustersExecuteScriptActionsRequestScriptActionsInner.from_dict(clusters_execute_script_actions_request_script_actions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


