# ClustersExecuteScriptActionsDefaultResponse

Describes the format of Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.clusters_execute_script_actions_default_response import ClustersExecuteScriptActionsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClustersExecuteScriptActionsDefaultResponse from a JSON string
clusters_execute_script_actions_default_response_instance = ClustersExecuteScriptActionsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ClustersExecuteScriptActionsDefaultResponse.to_json())

# convert the object into a dict
clusters_execute_script_actions_default_response_dict = clusters_execute_script_actions_default_response_instance.to_dict()
# create an instance of ClustersExecuteScriptActionsDefaultResponse from a dict
clusters_execute_script_actions_default_response_from_dict = ClustersExecuteScriptActionsDefaultResponse.from_dict(clusters_execute_script_actions_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


