# ListProjectsResponse

A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the &#x60;page_token&#x60; parameter gives the next page of the results. When &#x60;next_page_token&#x60; is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. | [optional] 
**projects** | [**List[Project]**](Project.md) | The list of Projects that matched the list filter. This list can be paginated. | [optional] 

## Example

```python
from openapi_client.models.list_projects_response import ListProjectsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProjectsResponse from a JSON string
list_projects_response_instance = ListProjectsResponse.from_json(json)
# print the JSON string representation of the object
print(ListProjectsResponse.to_json())

# convert the object into a dict
list_projects_response_dict = list_projects_response_instance.to_dict()
# create an instance of ListProjectsResponse from a dict
list_projects_response_from_dict = ListProjectsResponse.from_dict(list_projects_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


