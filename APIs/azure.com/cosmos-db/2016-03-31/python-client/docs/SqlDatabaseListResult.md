# SqlDatabaseListResult

The List operation response, that contains the SQL databases and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SqlDatabase]**](SqlDatabase.md) | List of SQL databases and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_database_list_result import SqlDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDatabaseListResult from a JSON string
sql_database_list_result_instance = SqlDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(SqlDatabaseListResult.to_json())

# convert the object into a dict
sql_database_list_result_dict = sql_database_list_result_instance.to_dict()
# create an instance of SqlDatabaseListResult from a dict
sql_database_list_result_from_dict = SqlDatabaseListResult.from_dict(sql_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


