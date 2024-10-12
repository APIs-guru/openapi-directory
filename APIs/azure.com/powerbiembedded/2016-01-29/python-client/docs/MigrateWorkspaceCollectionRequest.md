# MigrateWorkspaceCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | **List[str]** |  | [optional] 
**target_resource_group** | **str** | Name of the resource group the Power BI workspace collections will be migrated to. | [optional] 

## Example

```python
from openapi_client.models.migrate_workspace_collection_request import MigrateWorkspaceCollectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateWorkspaceCollectionRequest from a JSON string
migrate_workspace_collection_request_instance = MigrateWorkspaceCollectionRequest.from_json(json)
# print the JSON string representation of the object
print(MigrateWorkspaceCollectionRequest.to_json())

# convert the object into a dict
migrate_workspace_collection_request_dict = migrate_workspace_collection_request_instance.to_dict()
# create an instance of MigrateWorkspaceCollectionRequest from a dict
migrate_workspace_collection_request_from_dict = MigrateWorkspaceCollectionRequest.from_dict(migrate_workspace_collection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


