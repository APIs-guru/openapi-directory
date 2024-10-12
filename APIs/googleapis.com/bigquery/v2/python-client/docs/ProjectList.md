# ProjectList

Response object of ListProjects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A hash of the page of results. | [optional] 
**kind** | **str** | The resource type of the response. | [optional] [default to 'bigquery#projectList']
**next_page_token** | **str** | Use this token to request the next page of results. | [optional] 
**projects** | [**List[ProjectListProjectsInner]**](ProjectListProjectsInner.md) | Projects to which the user has at least READ access. | [optional] 
**total_items** | **int** | The total number of projects in the page. A wrapper is used here because the field should still be in the response when the value is 0. | [optional] 

## Example

```python
from openapi_client.models.project_list import ProjectList

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectList from a JSON string
project_list_instance = ProjectList.from_json(json)
# print the JSON string representation of the object
print(ProjectList.to_json())

# convert the object into a dict
project_list_dict = project_list_instance.to_dict()
# create an instance of ProjectList from a dict
project_list_from_dict = ProjectList.from_dict(project_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


