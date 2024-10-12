# GremlinDatabaseGetProperties

The properties of an Azure Cosmos DB SQL database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**GremlinDatabaseGetPropertiesResource**](GremlinDatabaseGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.gremlin_database_get_properties import GremlinDatabaseGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinDatabaseGetProperties from a JSON string
gremlin_database_get_properties_instance = GremlinDatabaseGetProperties.from_json(json)
# print the JSON string representation of the object
print(GremlinDatabaseGetProperties.to_json())

# convert the object into a dict
gremlin_database_get_properties_dict = gremlin_database_get_properties_instance.to_dict()
# create an instance of GremlinDatabaseGetProperties from a dict
gremlin_database_get_properties_from_dict = GremlinDatabaseGetProperties.from_dict(gremlin_database_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


