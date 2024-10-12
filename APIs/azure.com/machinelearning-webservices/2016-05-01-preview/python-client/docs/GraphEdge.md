# GraphEdge

Defines an edge within the web service's graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_node_id** | **str** | The source graph node&#39;s identifier. | [optional] 
**source_port_id** | **str** | The identifier of the source node&#39;s port that the edge connects from. | [optional] 
**target_node_id** | **str** | The destination graph node&#39;s identifier. | [optional] 
**target_port_id** | **str** | The identifier of the destination node&#39;s port that the edge connects into. | [optional] 

## Example

```python
from openapi_client.models.graph_edge import GraphEdge

# TODO update the JSON string below
json = "{}"
# create an instance of GraphEdge from a JSON string
graph_edge_instance = GraphEdge.from_json(json)
# print the JSON string representation of the object
print(GraphEdge.to_json())

# convert the object into a dict
graph_edge_dict = graph_edge_instance.to_dict()
# create an instance of GraphEdge from a dict
graph_edge_from_dict = GraphEdge.from_dict(graph_edge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


