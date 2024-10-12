# ClusterListPersistedScriptActionsResult

The ListPersistedScriptActions operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[RuntimeScriptAction]**](RuntimeScriptAction.md) | The list of Persisted Script Actions. | [optional] 

## Example

```python
from openapi_client.models.cluster_list_persisted_script_actions_result import ClusterListPersistedScriptActionsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterListPersistedScriptActionsResult from a JSON string
cluster_list_persisted_script_actions_result_instance = ClusterListPersistedScriptActionsResult.from_json(json)
# print the JSON string representation of the object
print(ClusterListPersistedScriptActionsResult.to_json())

# convert the object into a dict
cluster_list_persisted_script_actions_result_dict = cluster_list_persisted_script_actions_result_instance.to_dict()
# create an instance of ClusterListPersistedScriptActionsResult from a dict
cluster_list_persisted_script_actions_result_from_dict = ClusterListPersistedScriptActionsResult.from_dict(cluster_list_persisted_script_actions_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


