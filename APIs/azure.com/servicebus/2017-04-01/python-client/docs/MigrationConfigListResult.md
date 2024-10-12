# MigrationConfigListResult

The result of the List migrationConfigurations operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of migrationConfigurations | [optional] [readonly] 
**value** | [**List[MigrationConfigProperties]**](MigrationConfigProperties.md) | List of Migration Configs | [optional] 

## Example

```python
from openapi_client.models.migration_config_list_result import MigrationConfigListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationConfigListResult from a JSON string
migration_config_list_result_instance = MigrationConfigListResult.from_json(json)
# print the JSON string representation of the object
print(MigrationConfigListResult.to_json())

# convert the object into a dict
migration_config_list_result_dict = migration_config_list_result_instance.to_dict()
# create an instance of MigrationConfigListResult from a dict
migration_config_list_result_from_dict = MigrationConfigListResult.from_dict(migration_config_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


