# GraphNode

Specifies a node in the web service graph. The node can either be an input, output or asset node, so only one of the corresponding id properties is populated at any given time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **str** | The id of the asset represented by this node. | [optional] 
**input_id** | **str** | The id of the input element represented by this node. | [optional] 
**output_id** | **str** | The id of the output element represented by this node. | [optional] 
**parameters** | [**Dict[str, WebServiceParameter]**](WebServiceParameter.md) | If applicable, parameters of the node. Global graph parameters map into these, with values set at runtime. | [optional] 

## Example

```python
from openapi_client.models.graph_node import GraphNode

# TODO update the JSON string below
json = "{}"
# create an instance of GraphNode from a JSON string
graph_node_instance = GraphNode.from_json(json)
# print the JSON string representation of the object
print(GraphNode.to_json())

# convert the object into a dict
graph_node_dict = graph_node_instance.to_dict()
# create an instance of GraphNode from a dict
graph_node_from_dict = GraphNode.from_dict(graph_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


