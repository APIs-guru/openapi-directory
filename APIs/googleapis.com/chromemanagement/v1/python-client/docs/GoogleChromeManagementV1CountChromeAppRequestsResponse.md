# GoogleChromeManagementV1CountChromeAppRequestsResponse

Response containing summary of requested app installations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to specify the next page in the list. | [optional] 
**requested_apps** | [**List[GoogleChromeManagementV1ChromeAppRequest]**](GoogleChromeManagementV1ChromeAppRequest.md) | Count of requested apps matching request. | [optional] 
**total_size** | **int** | Total number of matching app requests. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_count_chrome_app_requests_response import GoogleChromeManagementV1CountChromeAppRequestsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CountChromeAppRequestsResponse from a JSON string
google_chrome_management_v1_count_chrome_app_requests_response_instance = GoogleChromeManagementV1CountChromeAppRequestsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CountChromeAppRequestsResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_count_chrome_app_requests_response_dict = google_chrome_management_v1_count_chrome_app_requests_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1CountChromeAppRequestsResponse from a dict
google_chrome_management_v1_count_chrome_app_requests_response_from_dict = GoogleChromeManagementV1CountChromeAppRequestsResponse.from_dict(google_chrome_management_v1_count_chrome_app_requests_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


