# GremlinDatabaseResource

Cosmos DB Gremlin database id object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB Gremlin database | 

## Example

```python
from openapi_client.models.gremlin_database_resource import GremlinDatabaseResource

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinDatabaseResource from a JSON string
gremlin_database_resource_instance = GremlinDatabaseResource.from_json(json)
# print the JSON string representation of the object
print(GremlinDatabaseResource.to_json())

# convert the object into a dict
gremlin_database_resource_dict = gremlin_database_resource_instance.to_dict()
# create an instance of GremlinDatabaseResource from a dict
gremlin_database_resource_from_dict = GremlinDatabaseResource.from_dict(gremlin_database_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


