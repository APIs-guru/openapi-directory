# GetOrganizationApiRequests200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_id** | **str** | Database ID for the admin user who made the API request. | [optional] 
**host** | **str** | The host which the API request was directed at. | [optional] 
**method** | **str** | HTTP method used in the API request. | [optional] 
**operation_id** | **str** | Operation ID for the endpoint. | [optional] 
**path** | **str** | The API request path. | [optional] 
**query_string** | **str** | The query string sent with the API request. | [optional] 
**response_code** | **int** | API request response code. | [optional] 
**source_ip** | **str** | Public IP address from which the API request was made. | [optional] 
**ts** | **datetime** | Timestamp, in iso8601 format, indicating when the API request was made. | [optional] 
**user_agent** | **str** | The API request user agent. | [optional] 
**version** | **int** | API version of the endpoint. | [optional] 

## Example

```python
from openapi_client.models.get_organization_api_requests200_response_inner import GetOrganizationApiRequests200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationApiRequests200ResponseInner from a JSON string
get_organization_api_requests200_response_inner_instance = GetOrganizationApiRequests200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationApiRequests200ResponseInner.to_json())

# convert the object into a dict
get_organization_api_requests200_response_inner_dict = get_organization_api_requests200_response_inner_instance.to_dict()
# create an instance of GetOrganizationApiRequests200ResponseInner from a dict
get_organization_api_requests200_response_inner_from_dict = GetOrganizationApiRequests200ResponseInner.from_dict(get_organization_api_requests200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


