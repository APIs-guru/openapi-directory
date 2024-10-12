# ListTargetProjectsResponse

Response message for 'ListTargetProjects' call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] [readonly] 
**target_projects** | [**List[TargetProject]**](TargetProject.md) | Output only. The list of target response. | [optional] [readonly] 
**unreachable** | **List[str]** | Output only. Locations that could not be reached. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_target_projects_response import ListTargetProjectsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTargetProjectsResponse from a JSON string
list_target_projects_response_instance = ListTargetProjectsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTargetProjectsResponse.to_json())

# convert the object into a dict
list_target_projects_response_dict = list_target_projects_response_instance.to_dict()
# create an instance of ListTargetProjectsResponse from a dict
list_target_projects_response_from_dict = ListTargetProjectsResponse.from_dict(list_target_projects_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


