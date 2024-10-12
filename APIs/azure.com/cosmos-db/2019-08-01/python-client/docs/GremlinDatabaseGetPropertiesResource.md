# GremlinDatabaseGetPropertiesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB Gremlin database | 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] [readonly] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] [readonly] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gremlin_database_get_properties_resource import GremlinDatabaseGetPropertiesResource

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinDatabaseGetPropertiesResource from a JSON string
gremlin_database_get_properties_resource_instance = GremlinDatabaseGetPropertiesResource.from_json(json)
# print the JSON string representation of the object
print(GremlinDatabaseGetPropertiesResource.to_json())

# convert the object into a dict
gremlin_database_get_properties_resource_dict = gremlin_database_get_properties_resource_instance.to_dict()
# create an instance of GremlinDatabaseGetPropertiesResource from a dict
gremlin_database_get_properties_resource_from_dict = GremlinDatabaseGetPropertiesResource.from_dict(gremlin_database_get_properties_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


