# Graph


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | **List[object]** | Array of node objects. | 
**root_node_id** | **str** | Root node id. | 

## Example

```python
from openapi_client.models.graph import Graph

# TODO update the JSON string below
json = "{}"
# create an instance of Graph from a JSON string
graph_instance = Graph.from_json(json)
# print the JSON string representation of the object
print(Graph.to_json())

# convert the object into a dict
graph_dict = graph_instance.to_dict()
# create an instance of Graph from a dict
graph_from_dict = Graph.from_dict(graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


