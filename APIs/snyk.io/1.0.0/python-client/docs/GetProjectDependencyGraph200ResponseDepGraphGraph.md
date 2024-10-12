# GetProjectDependencyGraph200ResponseDepGraphGraph

A directional graph of the packages in the project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner]**](GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner.md) | A list of the first-level packages | [optional] 
**root_node_id** | **str** | The internal id of the root node | 

## Example

```python
from openapi_client.models.get_project_dependency_graph200_response_dep_graph_graph import GetProjectDependencyGraph200ResponseDepGraphGraph

# TODO update the JSON string below
json = "{}"
# create an instance of GetProjectDependencyGraph200ResponseDepGraphGraph from a JSON string
get_project_dependency_graph200_response_dep_graph_graph_instance = GetProjectDependencyGraph200ResponseDepGraphGraph.from_json(json)
# print the JSON string representation of the object
print(GetProjectDependencyGraph200ResponseDepGraphGraph.to_json())

# convert the object into a dict
get_project_dependency_graph200_response_dep_graph_graph_dict = get_project_dependency_graph200_response_dep_graph_graph_instance.to_dict()
# create an instance of GetProjectDependencyGraph200ResponseDepGraphGraph from a dict
get_project_dependency_graph200_response_dep_graph_graph_from_dict = GetProjectDependencyGraph200ResponseDepGraphGraph.from_dict(get_project_dependency_graph200_response_dep_graph_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


