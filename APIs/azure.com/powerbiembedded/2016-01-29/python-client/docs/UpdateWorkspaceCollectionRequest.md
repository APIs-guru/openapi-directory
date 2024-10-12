# UpdateWorkspaceCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**AzureSku**](AzureSku.md) |  | [optional] 
**tags** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.update_workspace_collection_request import UpdateWorkspaceCollectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWorkspaceCollectionRequest from a JSON string
update_workspace_collection_request_instance = UpdateWorkspaceCollectionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateWorkspaceCollectionRequest.to_json())

# convert the object into a dict
update_workspace_collection_request_dict = update_workspace_collection_request_instance.to_dict()
# create an instance of UpdateWorkspaceCollectionRequest from a dict
update_workspace_collection_request_from_dict = UpdateWorkspaceCollectionRequest.from_dict(update_workspace_collection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


