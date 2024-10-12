# MigrationResult

The result of the container migration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | The name of the container to be migrated. | [optional] [readonly] 
**destination_share_name** | **str** | The name of the destination storage share. | [optional] [readonly] 
**failure_reason** | **str** | The migration failure reason. | [optional] [readonly] 
**job_id** | **str** | The migration job ID. | [optional] [readonly] 
**migration_status** | [**MigrationState**](MigrationState.md) |  | [optional] 
**source_share_name** | **str** | The name of the source storage share. | [optional] [readonly] 
**storage_account_name** | **str** | The storage account name. | [optional] [readonly] 
**sub_entities_completed** | **int** | The number of entities which have been migrated. | [optional] [readonly] 
**sub_entities_failed** | **int** | The number of entities which failed in migration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_result import MigrationResult

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationResult from a JSON string
migration_result_instance = MigrationResult.from_json(json)
# print the JSON string representation of the object
print(MigrationResult.to_json())

# convert the object into a dict
migration_result_dict = migration_result_instance.to_dict()
# create an instance of MigrationResult from a dict
migration_result_from_dict = MigrationResult.from_dict(migration_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


