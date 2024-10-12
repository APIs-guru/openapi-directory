# GoogleChromeManagementV1StorageStatusReport

Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk** | [**List[GoogleChromeManagementV1DiskInfo]**](GoogleChromeManagementV1DiskInfo.md) | Output only. Reports on disk. | [optional] [readonly] 
**report_time** | **str** | Output only. Timestamp of when the sample was collected on device | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_storage_status_report import GoogleChromeManagementV1StorageStatusReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1StorageStatusReport from a JSON string
google_chrome_management_v1_storage_status_report_instance = GoogleChromeManagementV1StorageStatusReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1StorageStatusReport.to_json())

# convert the object into a dict
google_chrome_management_v1_storage_status_report_dict = google_chrome_management_v1_storage_status_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1StorageStatusReport from a dict
google_chrome_management_v1_storage_status_report_from_dict = GoogleChromeManagementV1StorageStatusReport.from_dict(google_chrome_management_v1_storage_status_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


