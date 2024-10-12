# CreateDatabaseRestorePointDefinition

Contains the information necessary to perform a create database restore point operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restore_point_label** | **str** | The restore point label to apply | 

## Example

```python
from openapi_client.models.create_database_restore_point_definition import CreateDatabaseRestorePointDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDatabaseRestorePointDefinition from a JSON string
create_database_restore_point_definition_instance = CreateDatabaseRestorePointDefinition.from_json(json)
# print the JSON string representation of the object
print(CreateDatabaseRestorePointDefinition.to_json())

# convert the object into a dict
create_database_restore_point_definition_dict = create_database_restore_point_definition_instance.to_dict()
# create an instance of CreateDatabaseRestorePointDefinition from a dict
create_database_restore_point_definition_from_dict = CreateDatabaseRestorePointDefinition.from_dict(create_database_restore_point_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


