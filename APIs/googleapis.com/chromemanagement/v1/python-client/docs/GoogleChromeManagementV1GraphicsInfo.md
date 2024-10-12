# GoogleChromeManagementV1GraphicsInfo

Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_INFO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapter_info** | [**GoogleChromeManagementV1GraphicsAdapterInfo**](GoogleChromeManagementV1GraphicsAdapterInfo.md) |  | [optional] 
**display_devices** | [**List[GoogleChromeManagementV1DisplayDevice]**](GoogleChromeManagementV1DisplayDevice.md) | Output only. Information about the display(s) of the device. | [optional] [readonly] 
**eprivacy_supported** | **bool** | Output only. Is ePrivacy screen supported or not. | [optional] [readonly] 
**touch_screen_info** | [**GoogleChromeManagementV1TouchScreenInfo**](GoogleChromeManagementV1TouchScreenInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_graphics_info import GoogleChromeManagementV1GraphicsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1GraphicsInfo from a JSON string
google_chrome_management_v1_graphics_info_instance = GoogleChromeManagementV1GraphicsInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1GraphicsInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_graphics_info_dict = google_chrome_management_v1_graphics_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1GraphicsInfo from a dict
google_chrome_management_v1_graphics_info_from_dict = GoogleChromeManagementV1GraphicsInfo.from_dict(google_chrome_management_v1_graphics_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


