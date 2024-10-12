# DatabaseMigrateEventProperties

Properties of the database error resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | Gets or sets the database for which the error is being reported. | [optional] 
**database_instance_id** | **str** | Gets or sets the database instance for which the error is being reported. | [optional] 

## Example

```python
from openapi_client.models.database_migrate_event_properties import DatabaseMigrateEventProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseMigrateEventProperties from a JSON string
database_migrate_event_properties_instance = DatabaseMigrateEventProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseMigrateEventProperties.to_json())

# convert the object into a dict
database_migrate_event_properties_dict = database_migrate_event_properties_instance.to_dict()
# create an instance of DatabaseMigrateEventProperties from a dict
database_migrate_event_properties_from_dict = DatabaseMigrateEventProperties.from_dict(database_migrate_event_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


