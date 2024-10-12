# WorkspaceCollectionList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[WorkspaceCollection]**](WorkspaceCollection.md) |  | [optional] 

## Example

```python
from openapi_client.models.workspace_collection_list import WorkspaceCollectionList

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCollectionList from a JSON string
workspace_collection_list_instance = WorkspaceCollectionList.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCollectionList.to_json())

# convert the object into a dict
workspace_collection_list_dict = workspace_collection_list_instance.to_dict()
# create an instance of WorkspaceCollectionList from a dict
workspace_collection_list_from_dict = WorkspaceCollectionList.from_dict(workspace_collection_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


