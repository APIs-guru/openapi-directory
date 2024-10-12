# ScriptActionsList

The persisted script action for the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[ClusterListRuntimeScriptActionDetailResultValueInner]**](ClusterListRuntimeScriptActionDetailResultValueInner.md) | The list of persisted script action details for the cluster. | [optional] 

## Example

```python
from openapi_client.models.script_actions_list import ScriptActionsList

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptActionsList from a JSON string
script_actions_list_instance = ScriptActionsList.from_json(json)
# print the JSON string representation of the object
print(ScriptActionsList.to_json())

# convert the object into a dict
script_actions_list_dict = script_actions_list_instance.to_dict()
# create an instance of ScriptActionsList from a dict
script_actions_list_from_dict = ScriptActionsList.from_dict(script_actions_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


