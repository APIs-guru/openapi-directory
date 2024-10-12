# GetProjectDependencyGraph200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dep_graph** | [**GetProjectDependencyGraph200ResponseDepGraph**](GetProjectDependencyGraph200ResponseDepGraph.md) |  | 

## Example

```python
from openapi_client.models.get_project_dependency_graph200_response import GetProjectDependencyGraph200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetProjectDependencyGraph200Response from a JSON string
get_project_dependency_graph200_response_instance = GetProjectDependencyGraph200Response.from_json(json)
# print the JSON string representation of the object
print(GetProjectDependencyGraph200Response.to_json())

# convert the object into a dict
get_project_dependency_graph200_response_dict = get_project_dependency_graph200_response_instance.to_dict()
# create an instance of GetProjectDependencyGraph200Response from a dict
get_project_dependency_graph200_response_from_dict = GetProjectDependencyGraph200Response.from_dict(get_project_dependency_graph200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


