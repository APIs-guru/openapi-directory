# ProjectDependencyGraph


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dep_graph** | [**GetProjectDependencyGraph200ResponseDepGraph**](GetProjectDependencyGraph200ResponseDepGraph.md) |  | 

## Example

```python
from openapi_client.models.project_dependency_graph import ProjectDependencyGraph

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectDependencyGraph from a JSON string
project_dependency_graph_instance = ProjectDependencyGraph.from_json(json)
# print the JSON string representation of the object
print(ProjectDependencyGraph.to_json())

# convert the object into a dict
project_dependency_graph_dict = project_dependency_graph_instance.to_dict()
# create an instance of ProjectDependencyGraph from a dict
project_dependency_graph_from_dict = ProjectDependencyGraph.from_dict(project_dependency_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


