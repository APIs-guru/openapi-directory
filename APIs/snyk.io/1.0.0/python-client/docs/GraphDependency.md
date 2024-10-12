# GraphDependency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_id** | **str** | Node id unique across the graph. | 

## Example

```python
from openapi_client.models.graph_dependency import GraphDependency

# TODO update the JSON string below
json = "{}"
# create an instance of GraphDependency from a JSON string
graph_dependency_instance = GraphDependency.from_json(json)
# print the JSON string representation of the object
print(GraphDependency.to_json())

# convert the object into a dict
graph_dependency_dict = graph_dependency_instance.to_dict()
# create an instance of GraphDependency from a dict
graph_dependency_from_dict = GraphDependency.from_dict(graph_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


