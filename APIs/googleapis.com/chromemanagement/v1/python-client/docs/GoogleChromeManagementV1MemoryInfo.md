# GoogleChromeManagementV1MemoryInfo

Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_INFO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_ram_bytes** | **str** | Output only. Amount of available RAM in bytes. | [optional] [readonly] 
**total_memory_encryption** | [**GoogleChromeManagementV1TotalMemoryEncryptionInfo**](GoogleChromeManagementV1TotalMemoryEncryptionInfo.md) |  | [optional] 
**total_ram_bytes** | **str** | Output only. Total RAM in bytes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_memory_info import GoogleChromeManagementV1MemoryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1MemoryInfo from a JSON string
google_chrome_management_v1_memory_info_instance = GoogleChromeManagementV1MemoryInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1MemoryInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_memory_info_dict = google_chrome_management_v1_memory_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1MemoryInfo from a dict
google_chrome_management_v1_memory_info_from_dict = GoogleChromeManagementV1MemoryInfo.from_dict(google_chrome_management_v1_memory_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


