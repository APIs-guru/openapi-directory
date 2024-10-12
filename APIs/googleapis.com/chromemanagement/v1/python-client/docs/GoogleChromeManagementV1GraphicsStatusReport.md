# GoogleChromeManagementV1GraphicsStatusReport

Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: 3 hours. * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_GRAPHICS_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displays** | [**List[GoogleChromeManagementV1DisplayInfo]**](GoogleChromeManagementV1DisplayInfo.md) | Output only. Information about the displays for the device. | [optional] [readonly] 
**report_time** | **str** | Output only. Time at which the graphics data was reported. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_graphics_status_report import GoogleChromeManagementV1GraphicsStatusReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1GraphicsStatusReport from a JSON string
google_chrome_management_v1_graphics_status_report_instance = GoogleChromeManagementV1GraphicsStatusReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1GraphicsStatusReport.to_json())

# convert the object into a dict
google_chrome_management_v1_graphics_status_report_dict = google_chrome_management_v1_graphics_status_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1GraphicsStatusReport from a dict
google_chrome_management_v1_graphics_status_report_from_dict = GoogleChromeManagementV1GraphicsStatusReport.from_dict(google_chrome_management_v1_graphics_status_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


