# SqlDatabaseResource

Cosmos DB SQL database resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB SQL database | 

## Example

```python
from openapi_client.models.sql_database_resource import SqlDatabaseResource

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDatabaseResource from a JSON string
sql_database_resource_instance = SqlDatabaseResource.from_json(json)
# print the JSON string representation of the object
print(SqlDatabaseResource.to_json())

# convert the object into a dict
sql_database_resource_dict = sql_database_resource_instance.to_dict()
# create an instance of SqlDatabaseResource from a dict
sql_database_resource_from_dict = SqlDatabaseResource.from_dict(sql_database_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


