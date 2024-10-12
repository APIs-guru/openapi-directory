# ProjectsListResponse

Project List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#projectsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**projects** | [**List[Project]**](Project.md) | Project collection. | [optional] 

## Example

```python
from openapi_client.models.projects_list_response import ProjectsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectsListResponse from a JSON string
projects_list_response_instance = ProjectsListResponse.from_json(json)
# print the JSON string representation of the object
print(ProjectsListResponse.to_json())

# convert the object into a dict
projects_list_response_dict = projects_list_response_instance.to_dict()
# create an instance of ProjectsListResponse from a dict
projects_list_response_from_dict = ProjectsListResponse.from_dict(projects_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


