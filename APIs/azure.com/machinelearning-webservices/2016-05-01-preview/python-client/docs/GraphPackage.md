# GraphPackage

Defines the graph of modules making up the machine learning solution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edges** | [**List[GraphEdge]**](GraphEdge.md) | The list of edges making up the graph. | [optional] 
**graph_parameters** | [**Dict[str, GraphParameter]**](GraphParameter.md) | The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level. | [optional] 
**nodes** | [**Dict[str, GraphNode]**](GraphNode.md) | The set of nodes making up the graph, provided as a nodeId to GraphNode map | [optional] 

## Example

```python
from openapi_client.models.graph_package import GraphPackage

# TODO update the JSON string below
json = "{}"
# create an instance of GraphPackage from a JSON string
graph_package_instance = GraphPackage.from_json(json)
# print the JSON string representation of the object
print(GraphPackage.to_json())

# convert the object into a dict
graph_package_dict = graph_package_instance.to_dict()
# create an instance of GraphPackage from a dict
graph_package_from_dict = GraphPackage.from_dict(graph_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


