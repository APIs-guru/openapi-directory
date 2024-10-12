# ClustersExecuteScriptActionsRequest

The parameters for the script actions to execute on a running cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persist_on_success** | **bool** | Gets or sets if the scripts needs to be persisted. | 
**script_actions** | [**List[ClustersExecuteScriptActionsRequestScriptActionsInner]**](ClustersExecuteScriptActionsRequestScriptActionsInner.md) | The list of run time script actions. | [optional] 

## Example

```python
from openapi_client.models.clusters_execute_script_actions_request import ClustersExecuteScriptActionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClustersExecuteScriptActionsRequest from a JSON string
clusters_execute_script_actions_request_instance = ClustersExecuteScriptActionsRequest.from_json(json)
# print the JSON string representation of the object
print(ClustersExecuteScriptActionsRequest.to_json())

# convert the object into a dict
clusters_execute_script_actions_request_dict = clusters_execute_script_actions_request_instance.to_dict()
# create an instance of ClustersExecuteScriptActionsRequest from a dict
clusters_execute_script_actions_request_from_dict = ClustersExecuteScriptActionsRequest.from_dict(clusters_execute_script_actions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


