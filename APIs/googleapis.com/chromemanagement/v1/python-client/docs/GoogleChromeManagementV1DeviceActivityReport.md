# GoogleChromeManagementV1DeviceActivityReport

Device activity report. * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_activity_state** | **str** | Output only. Device activity state. | [optional] [readonly] 
**report_time** | **str** | Output only. Timestamp of when the report was collected. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_device_activity_report import GoogleChromeManagementV1DeviceActivityReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1DeviceActivityReport from a JSON string
google_chrome_management_v1_device_activity_report_instance = GoogleChromeManagementV1DeviceActivityReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1DeviceActivityReport.to_json())

# convert the object into a dict
google_chrome_management_v1_device_activity_report_dict = google_chrome_management_v1_device_activity_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1DeviceActivityReport from a dict
google_chrome_management_v1_device_activity_report_from_dict = GoogleChromeManagementV1DeviceActivityReport.from_dict(google_chrome_management_v1_device_activity_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


