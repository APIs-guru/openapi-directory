# GoogleChromeManagementV1CountChromeVersionsResponse

Response containing requested browser versions details and counts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser_versions** | [**List[GoogleChromeManagementV1BrowserVersion]**](GoogleChromeManagementV1BrowserVersion.md) | List of all browser versions and their install counts. | [optional] 
**next_page_token** | **str** | Token to specify the next page of the request. | [optional] 
**total_size** | **int** | Total number browser versions matching request. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_count_chrome_versions_response import GoogleChromeManagementV1CountChromeVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CountChromeVersionsResponse from a JSON string
google_chrome_management_v1_count_chrome_versions_response_instance = GoogleChromeManagementV1CountChromeVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CountChromeVersionsResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_count_chrome_versions_response_dict = google_chrome_management_v1_count_chrome_versions_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1CountChromeVersionsResponse from a dict
google_chrome_management_v1_count_chrome_versions_response_from_dict = GoogleChromeManagementV1CountChromeVersionsResponse.from_dict(google_chrome_management_v1_count_chrome_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


