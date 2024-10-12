# ListFirebaseProjectsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to &#x60;ListFirebaseProjects&#x60; to find the next group of Projects. Page tokens are short-lived and should not be persisted. | [optional] 
**results** | [**List[FirebaseProject]**](FirebaseProject.md) | One page of the list of Projects that are accessible to the caller. | [optional] 

## Example

```python
from openapi_client.models.list_firebase_projects_response import ListFirebaseProjectsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFirebaseProjectsResponse from a JSON string
list_firebase_projects_response_instance = ListFirebaseProjectsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFirebaseProjectsResponse.to_json())

# convert the object into a dict
list_firebase_projects_response_dict = list_firebase_projects_response_instance.to_dict()
# create an instance of ListFirebaseProjectsResponse from a dict
list_firebase_projects_response_from_dict = ListFirebaseProjectsResponse.from_dict(list_firebase_projects_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


