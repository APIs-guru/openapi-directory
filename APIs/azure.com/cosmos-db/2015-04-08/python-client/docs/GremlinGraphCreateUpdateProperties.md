# GremlinGraphCreateUpdateProperties

Properties to create and update Azure Cosmos DB Gremlin graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **Dict[str, str]** | CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are \&quot;If-Match\&quot;, \&quot;If-None-Match\&quot;, \&quot;Session-Token\&quot; and \&quot;Throughput\&quot; | 
**resource** | [**GremlinGraphResource**](GremlinGraphResource.md) |  | 

## Example

```python
from openapi_client.models.gremlin_graph_create_update_properties import GremlinGraphCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinGraphCreateUpdateProperties from a JSON string
gremlin_graph_create_update_properties_instance = GremlinGraphCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(GremlinGraphCreateUpdateProperties.to_json())

# convert the object into a dict
gremlin_graph_create_update_properties_dict = gremlin_graph_create_update_properties_instance.to_dict()
# create an instance of GremlinGraphCreateUpdateProperties from a dict
gremlin_graph_create_update_properties_from_dict = GremlinGraphCreateUpdateProperties.from_dict(gremlin_graph_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


