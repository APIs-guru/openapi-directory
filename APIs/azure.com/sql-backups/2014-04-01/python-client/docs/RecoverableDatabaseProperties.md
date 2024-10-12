# RecoverableDatabaseProperties

The properties of a recoverable database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edition** | **str** | The edition of the database | [optional] [readonly] 
**elastic_pool_name** | **str** | The elastic pool name of the database | [optional] [readonly] 
**last_available_backup_date** | **datetime** | The last available backup date of the database (ISO8601 format) | [optional] [readonly] 
**service_level_objective** | **str** | The service level objective name of the database | [optional] [readonly] 

## Example

```python
from openapi_client.models.recoverable_database_properties import RecoverableDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecoverableDatabaseProperties from a JSON string
recoverable_database_properties_instance = RecoverableDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(RecoverableDatabaseProperties.to_json())

# convert the object into a dict
recoverable_database_properties_dict = recoverable_database_properties_instance.to_dict()
# create an instance of RecoverableDatabaseProperties from a dict
recoverable_database_properties_from_dict = RecoverableDatabaseProperties.from_dict(recoverable_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


