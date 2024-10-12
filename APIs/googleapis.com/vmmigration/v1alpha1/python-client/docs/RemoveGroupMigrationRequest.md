# RemoveGroupMigrationRequest

Request message for 'RemoveMigration' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migrating_vm** | **str** | The MigratingVm to remove. | [optional] 

## Example

```python
from openapi_client.models.remove_group_migration_request import RemoveGroupMigrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveGroupMigrationRequest from a JSON string
remove_group_migration_request_instance = RemoveGroupMigrationRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveGroupMigrationRequest.to_json())

# convert the object into a dict
remove_group_migration_request_dict = remove_group_migration_request_instance.to_dict()
# create an instance of RemoveGroupMigrationRequest from a dict
remove_group_migration_request_from_dict = RemoveGroupMigrationRequest.from_dict(remove_group_migration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


