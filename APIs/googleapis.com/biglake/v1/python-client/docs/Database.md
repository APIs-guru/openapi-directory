# Database

Database is the container of tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation time of the database. | [optional] [readonly] 
**delete_time** | **str** | Output only. The deletion time of the database. Only set after the database is deleted. | [optional] [readonly] 
**expire_time** | **str** | Output only. The time when this database is considered expired. Only set after the database is deleted. | [optional] [readonly] 
**hive_options** | [**HiveDatabaseOptions**](HiveDatabaseOptions.md) |  | [optional] 
**name** | **str** | Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id} | [optional] [readonly] 
**type** | **str** | The database type. | [optional] 
**update_time** | **str** | Output only. The last modification time of the database. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database import Database

# TODO update the JSON string below
json = "{}"
# create an instance of Database from a JSON string
database_instance = Database.from_json(json)
# print the JSON string representation of the object
print(Database.to_json())

# convert the object into a dict
database_dict = database_instance.to_dict()
# create an instance of Database from a dict
database_from_dict = Database.from_dict(database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


