# ClusterListRuntimeScriptActionDetailResult

The list runtime script action detail response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[ClusterListRuntimeScriptActionDetailResultValueInner]**](ClusterListRuntimeScriptActionDetailResultValueInner.md) | The list of persisted script action details for the cluster. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_list_runtime_script_action_detail_result import ClusterListRuntimeScriptActionDetailResult

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterListRuntimeScriptActionDetailResult from a JSON string
cluster_list_runtime_script_action_detail_result_instance = ClusterListRuntimeScriptActionDetailResult.from_json(json)
# print the JSON string representation of the object
print(ClusterListRuntimeScriptActionDetailResult.to_json())

# convert the object into a dict
cluster_list_runtime_script_action_detail_result_dict = cluster_list_runtime_script_action_detail_result_instance.to_dict()
# create an instance of ClusterListRuntimeScriptActionDetailResult from a dict
cluster_list_runtime_script_action_detail_result_from_dict = ClusterListRuntimeScriptActionDetailResult.from_dict(cluster_list_runtime_script_action_detail_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


