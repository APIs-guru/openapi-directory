# ListAvailableProjectsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to &#x60;ListAvailableProjects&#x60; to find the next group of Projects. Page tokens are short-lived and should not be persisted. | [optional] 
**project_info** | [**List[ProjectInfo]**](ProjectInfo.md) | The list of GCP &#x60;Projects&#x60; which can have Firebase resources added to them. | [optional] 

## Example

```python
from openapi_client.models.list_available_projects_response import ListAvailableProjectsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAvailableProjectsResponse from a JSON string
list_available_projects_response_instance = ListAvailableProjectsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAvailableProjectsResponse.to_json())

# convert the object into a dict
list_available_projects_response_dict = list_available_projects_response_instance.to_dict()
# create an instance of ListAvailableProjectsResponse from a dict
list_available_projects_response_from_dict = ListAvailableProjectsResponse.from_dict(list_available_projects_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


