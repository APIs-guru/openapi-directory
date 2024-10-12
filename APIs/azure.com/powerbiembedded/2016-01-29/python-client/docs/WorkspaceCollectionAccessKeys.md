# WorkspaceCollectionAccessKeys


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key1** | **str** | Access key 1 | [optional] 
**key2** | **str** | Access key 2 | [optional] 

## Example

```python
from openapi_client.models.workspace_collection_access_keys import WorkspaceCollectionAccessKeys

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCollectionAccessKeys from a JSON string
workspace_collection_access_keys_instance = WorkspaceCollectionAccessKeys.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCollectionAccessKeys.to_json())

# convert the object into a dict
workspace_collection_access_keys_dict = workspace_collection_access_keys_instance.to_dict()
# create an instance of WorkspaceCollectionAccessKeys from a dict
workspace_collection_access_keys_from_dict = WorkspaceCollectionAccessKeys.from_dict(workspace_collection_access_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


