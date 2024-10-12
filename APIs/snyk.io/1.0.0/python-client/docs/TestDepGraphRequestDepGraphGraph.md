# TestDepGraphRequestDepGraphGraph

Graph object references each pkg and how they depend on each other through the deps property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | **List[object]** | Array of node objects. | 
**root_node_id** | **str** | Root node id. | 

## Example

```python
from openapi_client.models.test_dep_graph_request_dep_graph_graph import TestDepGraphRequestDepGraphGraph

# TODO update the JSON string below
json = "{}"
# create an instance of TestDepGraphRequestDepGraphGraph from a JSON string
test_dep_graph_request_dep_graph_graph_instance = TestDepGraphRequestDepGraphGraph.from_json(json)
# print the JSON string representation of the object
print(TestDepGraphRequestDepGraphGraph.to_json())

# convert the object into a dict
test_dep_graph_request_dep_graph_graph_dict = test_dep_graph_request_dep_graph_graph_instance.to_dict()
# create an instance of TestDepGraphRequestDepGraphGraph from a dict
test_dep_graph_request_dep_graph_graph_from_dict = TestDepGraphRequestDepGraphGraph.from_dict(test_dep_graph_request_dep_graph_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


