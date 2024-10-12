# GoogleChromeManagementV1StorageInfo

Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_STORAGE_INFO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_disk_bytes** | **str** | The available space for user data storage in the device in bytes. | [optional] 
**total_disk_bytes** | **str** | The total space for user data storage in the device in bytes. | [optional] 
**volume** | [**List[GoogleChromeManagementV1StorageInfoDiskVolume]**](GoogleChromeManagementV1StorageInfoDiskVolume.md) | Information for disk volumes | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_storage_info import GoogleChromeManagementV1StorageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1StorageInfo from a JSON string
google_chrome_management_v1_storage_info_instance = GoogleChromeManagementV1StorageInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1StorageInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_storage_info_dict = google_chrome_management_v1_storage_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1StorageInfo from a dict
google_chrome_management_v1_storage_info_from_dict = GoogleChromeManagementV1StorageInfo.from_dict(google_chrome_management_v1_storage_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


