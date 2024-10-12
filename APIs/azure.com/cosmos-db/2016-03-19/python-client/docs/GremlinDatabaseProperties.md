# GremlinDatabaseProperties

The properties of an Azure Cosmos DB SQL database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] 
**id** | **str** | Name of the Cosmos DB Gremlin database | 

## Example

```python
from openapi_client.models.gremlin_database_properties import GremlinDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinDatabaseProperties from a JSON string
gremlin_database_properties_instance = GremlinDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(GremlinDatabaseProperties.to_json())

# convert the object into a dict
gremlin_database_properties_dict = gremlin_database_properties_instance.to_dict()
# create an instance of GremlinDatabaseProperties from a dict
gremlin_database_properties_from_dict = GremlinDatabaseProperties.from_dict(gremlin_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


