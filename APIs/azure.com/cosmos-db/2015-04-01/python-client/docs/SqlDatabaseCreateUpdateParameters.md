# SqlDatabaseCreateUpdateParameters

Parameters to create and update Cosmos DB SQL database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SqlDatabaseCreateUpdateProperties**](SqlDatabaseCreateUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.sql_database_create_update_parameters import SqlDatabaseCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDatabaseCreateUpdateParameters from a JSON string
sql_database_create_update_parameters_instance = SqlDatabaseCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SqlDatabaseCreateUpdateParameters.to_json())

# convert the object into a dict
sql_database_create_update_parameters_dict = sql_database_create_update_parameters_instance.to_dict()
# create an instance of SqlDatabaseCreateUpdateParameters from a dict
sql_database_create_update_parameters_from_dict = SqlDatabaseCreateUpdateParameters.from_dict(sql_database_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


