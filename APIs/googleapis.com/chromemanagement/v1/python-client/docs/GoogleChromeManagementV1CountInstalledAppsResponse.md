# GoogleChromeManagementV1CountInstalledAppsResponse

Response containing details of queried installed apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installed_apps** | [**List[GoogleChromeManagementV1InstalledApp]**](GoogleChromeManagementV1InstalledApp.md) | List of installed apps matching request. | [optional] 
**next_page_token** | **str** | Token to specify the next page of the request. | [optional] 
**total_size** | **int** | Total number of installed apps matching request. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_count_installed_apps_response import GoogleChromeManagementV1CountInstalledAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CountInstalledAppsResponse from a JSON string
google_chrome_management_v1_count_installed_apps_response_instance = GoogleChromeManagementV1CountInstalledAppsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CountInstalledAppsResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_count_installed_apps_response_dict = google_chrome_management_v1_count_installed_apps_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1CountInstalledAppsResponse from a dict
google_chrome_management_v1_count_installed_apps_response_from_dict = GoogleChromeManagementV1CountInstalledAppsResponse.from_dict(google_chrome_management_v1_count_installed_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


