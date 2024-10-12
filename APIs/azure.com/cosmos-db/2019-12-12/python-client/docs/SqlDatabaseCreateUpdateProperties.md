# SqlDatabaseCreateUpdateProperties

Properties to create and update Azure Cosmos DB SQL database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **Dict[str, str]** | CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are \&quot;If-Match\&quot;, \&quot;If-None-Match\&quot;, \&quot;Session-Token\&quot; and \&quot;Throughput\&quot; | 
**resource** | [**SqlDatabaseResource**](SqlDatabaseResource.md) |  | 

## Example

```python
from openapi_client.models.sql_database_create_update_properties import SqlDatabaseCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDatabaseCreateUpdateProperties from a JSON string
sql_database_create_update_properties_instance = SqlDatabaseCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(SqlDatabaseCreateUpdateProperties.to_json())

# convert the object into a dict
sql_database_create_update_properties_dict = sql_database_create_update_properties_instance.to_dict()
# create an instance of SqlDatabaseCreateUpdateProperties from a dict
sql_database_create_update_properties_from_dict = SqlDatabaseCreateUpdateProperties.from_dict(sql_database_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


