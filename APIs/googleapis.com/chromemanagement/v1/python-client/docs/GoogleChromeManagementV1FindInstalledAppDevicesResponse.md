# GoogleChromeManagementV1FindInstalledAppDevicesResponse

Response containing a list of devices with queried app installed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[GoogleChromeManagementV1Device]**](GoogleChromeManagementV1Device.md) | A list of devices which have the app installed. Sorted in ascending alphabetical order on the Device.machine field. | [optional] 
**next_page_token** | **str** | Token to specify the next page of the request. | [optional] 
**total_size** | **int** | Total number of devices matching request. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_find_installed_app_devices_response import GoogleChromeManagementV1FindInstalledAppDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1FindInstalledAppDevicesResponse from a JSON string
google_chrome_management_v1_find_installed_app_devices_response_instance = GoogleChromeManagementV1FindInstalledAppDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1FindInstalledAppDevicesResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_find_installed_app_devices_response_dict = google_chrome_management_v1_find_installed_app_devices_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1FindInstalledAppDevicesResponse from a dict
google_chrome_management_v1_find_installed_app_devices_response_from_dict = GoogleChromeManagementV1FindInstalledAppDevicesResponse.from_dict(google_chrome_management_v1_find_installed_app_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


