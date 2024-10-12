# DatabaseMetadata

Metadata for individual databases created in an instance. i.e. spanner instance can have multiple databases with unique configuration settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_configuration** | [**BackupConfiguration**](BackupConfiguration.md) |  | [optional] 
**backup_run** | [**BackupRun**](BackupRun.md) |  | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**resource_id** | [**DatabaseResourceId**](DatabaseResourceId.md) |  | [optional] 
**resource_name** | **str** | Required. Database name. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel | [optional] 

## Example

```python
from openapi_client.models.database_metadata import DatabaseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseMetadata from a JSON string
database_metadata_instance = DatabaseMetadata.from_json(json)
# print the JSON string representation of the object
print(DatabaseMetadata.to_json())

# convert the object into a dict
database_metadata_dict = database_metadata_instance.to_dict()
# create an instance of DatabaseMetadata from a dict
database_metadata_from_dict = DatabaseMetadata.from_dict(database_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


