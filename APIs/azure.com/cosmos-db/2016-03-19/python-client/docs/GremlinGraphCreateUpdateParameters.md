# GremlinGraphCreateUpdateParameters

Parameters to create and update Cosmos DB Gremlin graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GremlinGraphCreateUpdateProperties**](GremlinGraphCreateUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.gremlin_graph_create_update_parameters import GremlinGraphCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinGraphCreateUpdateParameters from a JSON string
gremlin_graph_create_update_parameters_instance = GremlinGraphCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(GremlinGraphCreateUpdateParameters.to_json())

# convert the object into a dict
gremlin_graph_create_update_parameters_dict = gremlin_graph_create_update_parameters_instance.to_dict()
# create an instance of GremlinGraphCreateUpdateParameters from a dict
gremlin_graph_create_update_parameters_from_dict = GremlinGraphCreateUpdateParameters.from_dict(gremlin_graph_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


