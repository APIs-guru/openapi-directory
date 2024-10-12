# GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deps** | [**List[GetProjectDependencyGraph200ResponseDepGraphGraphNodesInnerDepsInner]**](GetProjectDependencyGraph200ResponseDepGraphGraphNodesInnerDepsInner.md) | A list of the direct dependencies of the package | 
**node_id** | **str** | The internal id of the node | 
**pkg_id** | **str** | The id of the package | 

## Example

```python
from openapi_client.models.get_project_dependency_graph200_response_dep_graph_graph_nodes_inner import GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner from a JSON string
get_project_dependency_graph200_response_dep_graph_graph_nodes_inner_instance = GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner.from_json(json)
# print the JSON string representation of the object
print(GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner.to_json())

# convert the object into a dict
get_project_dependency_graph200_response_dep_graph_graph_nodes_inner_dict = get_project_dependency_graph200_response_dep_graph_graph_nodes_inner_instance.to_dict()
# create an instance of GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner from a dict
get_project_dependency_graph200_response_dep_graph_graph_nodes_inner_from_dict = GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner.from_dict(get_project_dependency_graph200_response_dep_graph_graph_nodes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


