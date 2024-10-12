# GremlinDatabaseCreateUpdateParameters

Parameters to create and update Cosmos DB Gremlin database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GremlinDatabaseCreateUpdateProperties**](GremlinDatabaseCreateUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.gremlin_database_create_update_parameters import GremlinDatabaseCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinDatabaseCreateUpdateParameters from a JSON string
gremlin_database_create_update_parameters_instance = GremlinDatabaseCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(GremlinDatabaseCreateUpdateParameters.to_json())

# convert the object into a dict
gremlin_database_create_update_parameters_dict = gremlin_database_create_update_parameters_instance.to_dict()
# create an instance of GremlinDatabaseCreateUpdateParameters from a dict
gremlin_database_create_update_parameters_from_dict = GremlinDatabaseCreateUpdateParameters.from_dict(gremlin_database_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


