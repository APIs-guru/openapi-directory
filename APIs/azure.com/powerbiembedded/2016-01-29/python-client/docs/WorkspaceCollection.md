# WorkspaceCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource id | [optional] 
**location** | **str** | Azure location | [optional] 
**name** | **str** | Workspace collection name | [optional] 
**properties** | **object** | Properties | [optional] 
**sku** | [**AzureSku**](AzureSku.md) |  | [optional] 
**tags** | **Dict[str, str]** |  | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.workspace_collection import WorkspaceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCollection from a JSON string
workspace_collection_instance = WorkspaceCollection.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCollection.to_json())

# convert the object into a dict
workspace_collection_dict = workspace_collection_instance.to_dict()
# create an instance of WorkspaceCollection from a dict
workspace_collection_from_dict = WorkspaceCollection.from_dict(workspace_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


