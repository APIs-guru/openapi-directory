# GoogleChromeManagementV1OsUpdateStatus

Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_reboot_time** | **str** | Output only. Timestamp of the last reboot. | [optional] [readonly] 
**last_update_check_time** | **str** | Output only. Timestamp of the last update check. | [optional] [readonly] 
**last_update_time** | **str** | Output only. Timestamp of the last successful update. | [optional] [readonly] 
**new_platform_version** | **str** | Output only. New platform version of the os image being downloaded and applied. It is only set when update status is OS_IMAGE_DOWNLOAD_IN_PROGRESS or OS_UPDATE_NEED_REBOOT. Note this could be a dummy \&quot;0.0.0.0\&quot; for OS_UPDATE_NEED_REBOOT status for some edge cases, e.g. update engine is restarted without a reboot. | [optional] [readonly] 
**new_requested_platform_version** | **str** | Output only. New requested platform version from the pending updated kiosk app. | [optional] [readonly] 
**update_state** | **str** | Output only. Current state of the os update. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_os_update_status import GoogleChromeManagementV1OsUpdateStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1OsUpdateStatus from a JSON string
google_chrome_management_v1_os_update_status_instance = GoogleChromeManagementV1OsUpdateStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1OsUpdateStatus.to_json())

# convert the object into a dict
google_chrome_management_v1_os_update_status_dict = google_chrome_management_v1_os_update_status_instance.to_dict()
# create an instance of GoogleChromeManagementV1OsUpdateStatus from a dict
google_chrome_management_v1_os_update_status_from_dict = GoogleChromeManagementV1OsUpdateStatus.from_dict(google_chrome_management_v1_os_update_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


