# ListApplicationsResponse

Response for ListApplications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applications** | [**List[Application]**](Application.md) | List of Applications. | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_applications_response import ListApplicationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListApplicationsResponse from a JSON string
list_applications_response_instance = ListApplicationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListApplicationsResponse.to_json())

# convert the object into a dict
list_applications_response_dict = list_applications_response_instance.to_dict()
# create an instance of ListApplicationsResponse from a dict
list_applications_response_from_dict = ListApplicationsResponse.from_dict(list_applications_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


