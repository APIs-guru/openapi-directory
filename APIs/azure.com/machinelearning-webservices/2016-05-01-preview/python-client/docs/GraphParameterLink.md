# GraphParameterLink

Association link for a graph global parameter to a node in the graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_id** | **str** | The graph node&#39;s identifier | 
**parameter_key** | **str** | The identifier of the node parameter that the global parameter maps to. | 

## Example

```python
from openapi_client.models.graph_parameter_link import GraphParameterLink

# TODO update the JSON string below
json = "{}"
# create an instance of GraphParameterLink from a JSON string
graph_parameter_link_instance = GraphParameterLink.from_json(json)
# print the JSON string representation of the object
print(GraphParameterLink.to_json())

# convert the object into a dict
graph_parameter_link_dict = graph_parameter_link_instance.to_dict()
# create an instance of GraphParameterLink from a dict
graph_parameter_link_from_dict = GraphParameterLink.from_dict(graph_parameter_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


