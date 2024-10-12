# AddGroupMigrationRequest

Request message for 'AddGroupMigration' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migrating_vm** | **str** | The full path name of the MigratingVm to add. | [optional] 

## Example

```python
from openapi_client.models.add_group_migration_request import AddGroupMigrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddGroupMigrationRequest from a JSON string
add_group_migration_request_instance = AddGroupMigrationRequest.from_json(json)
# print the JSON string representation of the object
print(AddGroupMigrationRequest.to_json())

# convert the object into a dict
add_group_migration_request_dict = add_group_migration_request_instance.to_dict()
# create an instance of AddGroupMigrationRequest from a dict
add_group_migration_request_from_dict = AddGroupMigrationRequest.from_dict(add_group_migration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


