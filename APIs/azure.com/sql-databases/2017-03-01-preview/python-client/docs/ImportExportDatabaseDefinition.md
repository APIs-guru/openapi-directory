# ImportExportDatabaseDefinition

Contains the information necessary to perform import/export operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_login** | **str** | Administrator login name. | 
**administrator_login_password** | **str** | Administrator login password. | 
**authentication_type** | **str** | Authentication type. | [optional] 
**database_name** | **str** | Name of the import database. | [optional] 
**edition** | **str** | Edition of the import database. | [optional] 
**max_size_bytes** | **str** | Max size in bytes for the import database. | [optional] 
**service_objective_name** | **str** | Service level objective name of the import database. | [optional] 
**storage_key** | **str** | Storage key. | 
**storage_key_type** | **str** | Storage key type. | 
**storage_uri** | **str** | Storage Uri. | 

## Example

```python
from openapi_client.models.import_export_database_definition import ImportExportDatabaseDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportDatabaseDefinition from a JSON string
import_export_database_definition_instance = ImportExportDatabaseDefinition.from_json(json)
# print the JSON string representation of the object
print(ImportExportDatabaseDefinition.to_json())

# convert the object into a dict
import_export_database_definition_dict = import_export_database_definition_instance.to_dict()
# create an instance of ImportExportDatabaseDefinition from a dict
import_export_database_definition_from_dict = ImportExportDatabaseDefinition.from_dict(import_export_database_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


