# CompleteDatabaseRestoreDefinition

Contains the information necessary to perform a complete database restore operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_backup_name** | **str** | The last backup name to apply | 

## Example

```python
from openapi_client.models.complete_database_restore_definition import CompleteDatabaseRestoreDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteDatabaseRestoreDefinition from a JSON string
complete_database_restore_definition_instance = CompleteDatabaseRestoreDefinition.from_json(json)
# print the JSON string representation of the object
print(CompleteDatabaseRestoreDefinition.to_json())

# convert the object into a dict
complete_database_restore_definition_dict = complete_database_restore_definition_instance.to_dict()
# create an instance of CompleteDatabaseRestoreDefinition from a dict
complete_database_restore_definition_from_dict = CompleteDatabaseRestoreDefinition.from_dict(complete_database_restore_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


