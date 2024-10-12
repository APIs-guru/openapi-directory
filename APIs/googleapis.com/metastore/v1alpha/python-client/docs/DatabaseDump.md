# DatabaseDump

A specification of the location of and metadata about a database dump from a relational database management system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_type** | **str** | The type of the database. | [optional] 
**gcs_uri** | **str** | A Cloud Storage object or folder URI that specifies the source from which to import metadata. It must begin with gs://. | [optional] 
**source_database** | **str** | The name of the source database. | [optional] 
**type** | **str** | Optional. The type of the database dump. If unspecified, defaults to MYSQL. | [optional] 

## Example

```python
from openapi_client.models.database_dump import DatabaseDump

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseDump from a JSON string
database_dump_instance = DatabaseDump.from_json(json)
# print the JSON string representation of the object
print(DatabaseDump.to_json())

# convert the object into a dict
database_dump_dict = database_dump_instance.to_dict()
# create an instance of DatabaseDump from a dict
database_dump_from_dict = DatabaseDump.from_dict(database_dump_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


