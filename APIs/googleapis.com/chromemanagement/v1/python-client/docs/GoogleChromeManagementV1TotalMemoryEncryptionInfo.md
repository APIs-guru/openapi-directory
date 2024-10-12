# GoogleChromeManagementV1TotalMemoryEncryptionInfo

Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_algorithm** | **str** | Memory encryption algorithm. | [optional] 
**encryption_state** | **str** | The state of memory encryption on the device. | [optional] 
**key_length** | **str** | The length of the encryption keys. | [optional] 
**max_keys** | **str** | The maximum number of keys that can be used for encryption. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_total_memory_encryption_info import GoogleChromeManagementV1TotalMemoryEncryptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TotalMemoryEncryptionInfo from a JSON string
google_chrome_management_v1_total_memory_encryption_info_instance = GoogleChromeManagementV1TotalMemoryEncryptionInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TotalMemoryEncryptionInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_total_memory_encryption_info_dict = google_chrome_management_v1_total_memory_encryption_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1TotalMemoryEncryptionInfo from a dict
google_chrome_management_v1_total_memory_encryption_info_from_dict = GoogleChromeManagementV1TotalMemoryEncryptionInfo.from_dict(google_chrome_management_v1_total_memory_encryption_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


