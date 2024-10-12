# GraphParameter

Defines a global parameter in the graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of this graph parameter. | [optional] 
**links** | [**List[GraphParameterLink]**](GraphParameterLink.md) | Association links for this parameter to nodes in the graph. | 
**type** | **str** | Graph parameter&#39;s type. | 

## Example

```python
from openapi_client.models.graph_parameter import GraphParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GraphParameter from a JSON string
graph_parameter_instance = GraphParameter.from_json(json)
# print the JSON string representation of the object
print(GraphParameter.to_json())

# convert the object into a dict
graph_parameter_dict = graph_parameter_instance.to_dict()
# create an instance of GraphParameter from a dict
graph_parameter_from_dict = GraphParameter.from_dict(graph_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


