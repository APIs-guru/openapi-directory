# GremlinGraphGetProperties

The properties of an Azure Cosmos DB Gremlin graph

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**GremlinGraphGetPropertiesResource**](GremlinGraphGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.gremlin_graph_get_properties import GremlinGraphGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinGraphGetProperties from a JSON string
gremlin_graph_get_properties_instance = GremlinGraphGetProperties.from_json(json)
# print the JSON string representation of the object
print(GremlinGraphGetProperties.to_json())

# convert the object into a dict
gremlin_graph_get_properties_dict = gremlin_graph_get_properties_instance.to_dict()
# create an instance of GremlinGraphGetProperties from a dict
gremlin_graph_get_properties_from_dict = GremlinGraphGetProperties.from_dict(gremlin_graph_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


