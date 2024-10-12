# ApplicationsListResponse

Template for a collection of Applications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applications** | [**List[Application]**](Application.md) | The list of applications that support data transfer and are also installed for the customer. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Identifies the resource as a collection of Applications. | [optional] [default to 'admin#datatransfer#applicationsList']
**next_page_token** | **str** | Token to specify the next page in the list. | [optional] 

## Example

```python
from openapi_client.models.applications_list_response import ApplicationsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationsListResponse from a JSON string
applications_list_response_instance = ApplicationsListResponse.from_json(json)
# print the JSON string representation of the object
print(ApplicationsListResponse.to_json())

# convert the object into a dict
applications_list_response_dict = applications_list_response_instance.to_dict()
# create an instance of ApplicationsListResponse from a dict
applications_list_response_from_dict = ApplicationsListResponse.from_dict(applications_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


