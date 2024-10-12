# StorageMigrationOptions

Options for app content migration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | StorageMigrationOptions resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_migration_options import StorageMigrationOptions

# TODO update the JSON string below
json = "{}"
# create an instance of StorageMigrationOptions from a JSON string
storage_migration_options_instance = StorageMigrationOptions.from_json(json)
# print the JSON string representation of the object
print(StorageMigrationOptions.to_json())

# convert the object into a dict
storage_migration_options_dict = storage_migration_options_instance.to_dict()
# create an instance of StorageMigrationOptions from a dict
storage_migration_options_from_dict = StorageMigrationOptions.from_dict(storage_migration_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


