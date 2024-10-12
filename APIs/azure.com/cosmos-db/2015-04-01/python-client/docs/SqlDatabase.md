# SqlDatabase

An Azure Cosmos DB SQL database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SqlDatabaseProperties**](SqlDatabaseProperties.md) |  | [optional] 
**id** | **str** | The unique resource identifier of the database account. | [optional] [readonly] 
**location** | **str** | The location of the resource group to which the resource belongs. | [optional] 
**name** | **str** | The name of the database account. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with \&quot;defaultExperience\&quot;: \&quot;Cassandra\&quot;. Current \&quot;defaultExperience\&quot; values also include \&quot;Table\&quot;, \&quot;Graph\&quot;, \&quot;DocumentDB\&quot;, and \&quot;MongoDB\&quot;. | [optional] 
**type** | **str** | The type of Azure resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_database import SqlDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDatabase from a JSON string
sql_database_instance = SqlDatabase.from_json(json)
# print the JSON string representation of the object
print(SqlDatabase.to_json())

# convert the object into a dict
sql_database_dict = sql_database_instance.to_dict()
# create an instance of SqlDatabase from a dict
sql_database_from_dict = SqlDatabase.from_dict(sql_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


