# DatabaseSchemaListResult

A list of database schemas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[DatabaseSchema]**](DatabaseSchema.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_schema_list_result import DatabaseSchemaListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseSchemaListResult from a JSON string
database_schema_list_result_instance = DatabaseSchemaListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseSchemaListResult.to_json())

# convert the object into a dict
database_schema_list_result_dict = database_schema_list_result_instance.to_dict()
# create an instance of DatabaseSchemaListResult from a dict
database_schema_list_result_from_dict = DatabaseSchemaListResult.from_dict(database_schema_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


