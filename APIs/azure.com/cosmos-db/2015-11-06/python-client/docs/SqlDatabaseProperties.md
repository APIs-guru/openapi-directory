# SqlDatabaseProperties

The properties of an Azure Cosmos DB SQL database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colls** | **str** | A system generated property that specified the addressable path of the collections resource. | [optional] 
**users** | **str** | A system generated property that specifies the addressable path of the users resource. | [optional] 
**id** | **str** | Name of the Cosmos DB SQL database | 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] 

## Example

```python
from openapi_client.models.sql_database_properties import SqlDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDatabaseProperties from a JSON string
sql_database_properties_instance = SqlDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(SqlDatabaseProperties.to_json())

# convert the object into a dict
sql_database_properties_dict = sql_database_properties_instance.to_dict()
# create an instance of SqlDatabaseProperties from a dict
sql_database_properties_from_dict = SqlDatabaseProperties.from_dict(sql_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


