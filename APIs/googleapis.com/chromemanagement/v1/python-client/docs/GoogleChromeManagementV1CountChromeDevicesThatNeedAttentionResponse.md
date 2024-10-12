# GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse

Response containing counts for devices that need attention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**no_recent_policy_sync_count** | **str** | Number of ChromeOS devices have not synced policies in the past 28 days. | [optional] 
**no_recent_user_activity_count** | **str** | Number of ChromeOS devices that have not seen any user activity in the past 28 days. | [optional] 
**os_version_not_compliant_count** | **str** | Number of devices whose OS version is not compliant. | [optional] 
**pending_update** | **str** | Number of devices that are pending an OS update. | [optional] 
**unsupported_policy_count** | **str** | Number of devices that are unable to apply a policy due to an OS version mismatch. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_count_chrome_devices_that_need_attention_response import GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse from a JSON string
google_chrome_management_v1_count_chrome_devices_that_need_attention_response_instance = GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_count_chrome_devices_that_need_attention_response_dict = google_chrome_management_v1_count_chrome_devices_that_need_attention_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse from a dict
google_chrome_management_v1_count_chrome_devices_that_need_attention_response_from_dict = GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse.from_dict(google_chrome_management_v1_count_chrome_devices_that_need_attention_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


