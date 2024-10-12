# RestorableDroppedManagedDatabaseProperties

The restorable dropped managed database's properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of the database (ISO8601 format). | [optional] [readonly] 
**database_name** | **str** | The name of the database. | [optional] [readonly] 
**deletion_date** | **datetime** | The deletion date of the database (ISO8601 format). | [optional] [readonly] 
**earliest_restore_date** | **datetime** | The earliest restore date of the database (ISO8601 format). | [optional] [readonly] 

## Example

```python
from openapi_client.models.restorable_dropped_managed_database_properties import RestorableDroppedManagedDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RestorableDroppedManagedDatabaseProperties from a JSON string
restorable_dropped_managed_database_properties_instance = RestorableDroppedManagedDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(RestorableDroppedManagedDatabaseProperties.to_json())

# convert the object into a dict
restorable_dropped_managed_database_properties_dict = restorable_dropped_managed_database_properties_instance.to_dict()
# create an instance of RestorableDroppedManagedDatabaseProperties from a dict
restorable_dropped_managed_database_properties_from_dict = RestorableDroppedManagedDatabaseProperties.from_dict(restorable_dropped_managed_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


