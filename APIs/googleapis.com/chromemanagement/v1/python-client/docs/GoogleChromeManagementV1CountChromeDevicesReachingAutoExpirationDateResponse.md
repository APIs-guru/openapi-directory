# GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse

Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_aue_count_reports** | [**List[GoogleChromeManagementV1DeviceAueCountReport]**](GoogleChromeManagementV1DeviceAueCountReport.md) | The list of reports sorted by auto update expiration date in ascending order. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response import GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse from a JSON string
google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response_instance = GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response_dict = google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse from a dict
google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response_from_dict = GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse.from_dict(google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


