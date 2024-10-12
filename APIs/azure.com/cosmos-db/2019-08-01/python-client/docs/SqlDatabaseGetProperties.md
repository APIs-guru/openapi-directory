# SqlDatabaseGetProperties

The properties of an Azure Cosmos DB SQL database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**SqlDatabaseGetPropertiesResource**](SqlDatabaseGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.sql_database_get_properties import SqlDatabaseGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDatabaseGetProperties from a JSON string
sql_database_get_properties_instance = SqlDatabaseGetProperties.from_json(json)
# print the JSON string representation of the object
print(SqlDatabaseGetProperties.to_json())

# convert the object into a dict
sql_database_get_properties_dict = sql_database_get_properties_instance.to_dict()
# create an instance of SqlDatabaseGetProperties from a dict
sql_database_get_properties_from_dict = SqlDatabaseGetProperties.from_dict(sql_database_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


