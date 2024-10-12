# GoogleChromeManagementV1KioskAppStatusReport

Kiosk app status report of a device. * Available for Kiosks * This field provides the app id and version number running on a kiosk device and the timestamp of when the report was last updated * Data for this field is controlled via policy: [ReportDeviceSessionStatus](https://chromeenterprise.google/policies/#ReportDeviceSessionStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_APPS_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | App id of kiosk app for example \&quot;mdmkkicfmmkgmpkmkdikhlbggogpicma\&quot; | [optional] 
**app_version** | **str** | App version number of kiosk app for example \&quot;1.10.118\&quot; | [optional] 
**report_time** | **str** | Timestamp of when report was collected | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_kiosk_app_status_report import GoogleChromeManagementV1KioskAppStatusReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1KioskAppStatusReport from a JSON string
google_chrome_management_v1_kiosk_app_status_report_instance = GoogleChromeManagementV1KioskAppStatusReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1KioskAppStatusReport.to_json())

# convert the object into a dict
google_chrome_management_v1_kiosk_app_status_report_dict = google_chrome_management_v1_kiosk_app_status_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1KioskAppStatusReport from a dict
google_chrome_management_v1_kiosk_app_status_report_from_dict = GoogleChromeManagementV1KioskAppStatusReport.from_dict(google_chrome_management_v1_kiosk_app_status_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


