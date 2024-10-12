# RestorableDroppedDatabaseProperties

The properties of a restorable dropped database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of the database (ISO8601 format) | [optional] [readonly] 
**database_name** | **str** | The name of the database | [optional] [readonly] 
**deletion_date** | **datetime** | The deletion date of the database (ISO8601 format) | [optional] [readonly] 
**earliest_restore_date** | **datetime** | The earliest restore date of the database (ISO8601 format) | [optional] [readonly] 
**edition** | **str** | The edition of the database | [optional] [readonly] 
**elastic_pool_name** | **str** | The elastic pool name of the database | [optional] [readonly] 
**max_size_bytes** | **str** | The max size in bytes of the database | [optional] [readonly] 
**service_level_objective** | **str** | The service level objective name of the database | [optional] [readonly] 

## Example

```python
from openapi_client.models.restorable_dropped_database_properties import RestorableDroppedDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RestorableDroppedDatabaseProperties from a JSON string
restorable_dropped_database_properties_instance = RestorableDroppedDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(RestorableDroppedDatabaseProperties.to_json())

# convert the object into a dict
restorable_dropped_database_properties_dict = restorable_dropped_database_properties_instance.to_dict()
# create an instance of RestorableDroppedDatabaseProperties from a dict
restorable_dropped_database_properties_from_dict = RestorableDroppedDatabaseProperties.from_dict(restorable_dropped_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


