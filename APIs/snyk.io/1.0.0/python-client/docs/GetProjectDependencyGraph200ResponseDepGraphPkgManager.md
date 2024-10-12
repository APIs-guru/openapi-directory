# GetProjectDependencyGraph200ResponseDepGraphPkgManager

The package manager of the project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the package manager | 
**repositories** | [**List[GetProjectDependencyGraph200ResponseDepGraphPkgManagerRepositoriesInner]**](GetProjectDependencyGraph200ResponseDepGraphPkgManagerRepositoriesInner.md) |  | [optional] 
**version** | **str** | The version of the package manager | [optional] 

## Example

```python
from openapi_client.models.get_project_dependency_graph200_response_dep_graph_pkg_manager import GetProjectDependencyGraph200ResponseDepGraphPkgManager

# TODO update the JSON string below
json = "{}"
# create an instance of GetProjectDependencyGraph200ResponseDepGraphPkgManager from a JSON string
get_project_dependency_graph200_response_dep_graph_pkg_manager_instance = GetProjectDependencyGraph200ResponseDepGraphPkgManager.from_json(json)
# print the JSON string representation of the object
print(GetProjectDependencyGraph200ResponseDepGraphPkgManager.to_json())

# convert the object into a dict
get_project_dependency_graph200_response_dep_graph_pkg_manager_dict = get_project_dependency_graph200_response_dep_graph_pkg_manager_instance.to_dict()
# create an instance of GetProjectDependencyGraph200ResponseDepGraphPkgManager from a dict
get_project_dependency_graph200_response_dep_graph_pkg_manager_from_dict = GetProjectDependencyGraph200ResponseDepGraphPkgManager.from_dict(get_project_dependency_graph200_response_dep_graph_pkg_manager_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


