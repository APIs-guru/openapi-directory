# DatabaseSchema

A database schema resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_schema import DatabaseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseSchema from a JSON string
database_schema_instance = DatabaseSchema.from_json(json)
# print the JSON string representation of the object
print(DatabaseSchema.to_json())

# convert the object into a dict
database_schema_dict = database_schema_instance.to_dict()
# create an instance of DatabaseSchema from a dict
database_schema_from_dict = DatabaseSchema.from_dict(database_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


