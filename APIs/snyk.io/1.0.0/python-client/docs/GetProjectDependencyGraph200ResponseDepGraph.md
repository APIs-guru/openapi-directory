# GetProjectDependencyGraph200ResponseDepGraph

The dependency-graph object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graph** | [**GetProjectDependencyGraph200ResponseDepGraphGraph**](GetProjectDependencyGraph200ResponseDepGraphGraph.md) |  | 
**pkg_manager** | [**GetProjectDependencyGraph200ResponseDepGraphPkgManager**](GetProjectDependencyGraph200ResponseDepGraphPkgManager.md) |  | 
**pkgs** | [**List[GetProjectDependencyGraph200ResponseDepGraphPkgsInner]**](GetProjectDependencyGraph200ResponseDepGraphPkgsInner.md) | A list of dependencies in the project | 
**schema_version** | **str** | The scheme version of the depGraph object | 

## Example

```python
from openapi_client.models.get_project_dependency_graph200_response_dep_graph import GetProjectDependencyGraph200ResponseDepGraph

# TODO update the JSON string below
json = "{}"
# create an instance of GetProjectDependencyGraph200ResponseDepGraph from a JSON string
get_project_dependency_graph200_response_dep_graph_instance = GetProjectDependencyGraph200ResponseDepGraph.from_json(json)
# print the JSON string representation of the object
print(GetProjectDependencyGraph200ResponseDepGraph.to_json())

# convert the object into a dict
get_project_dependency_graph200_response_dep_graph_dict = get_project_dependency_graph200_response_dep_graph_instance.to_dict()
# create an instance of GetProjectDependencyGraph200ResponseDepGraph from a dict
get_project_dependency_graph200_response_dep_graph_from_dict = GetProjectDependencyGraph200ResponseDepGraph.from_dict(get_project_dependency_graph200_response_dep_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


