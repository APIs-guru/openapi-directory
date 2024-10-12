# CreateWorkspaceCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Azure location | [optional] 
**sku** | [**AzureSku**](AzureSku.md) |  | [optional] 
**tags** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.create_workspace_collection_request import CreateWorkspaceCollectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkspaceCollectionRequest from a JSON string
create_workspace_collection_request_instance = CreateWorkspaceCollectionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateWorkspaceCollectionRequest.to_json())

# convert the object into a dict
create_workspace_collection_request_dict = create_workspace_collection_request_instance.to_dict()
# create an instance of CreateWorkspaceCollectionRequest from a dict
create_workspace_collection_request_from_dict = CreateWorkspaceCollectionRequest.from_dict(create_workspace_collection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


