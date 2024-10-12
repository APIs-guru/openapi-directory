# GoogleChromeManagementV1HeartbeatStatusReport

Heartbeat status report of a device. * Available for Kiosks * This field provides online/offline/unknown status of a device and will only be included if the status has changed (e.g. Online -> Offline) * Data for this field is controlled via policy: [HeartbeatEnabled](https://chromeenterprise.google/policies/#HeartbeatEnabled) [More Info](https://support.google.com/chrome/a/answer/6179663#:~:text=On%20the%20Chrome,device%20status%20alerts) * Heartbeat Frequency: 2 mins * Note: If a device goes offline, it can take up to 12 minutes for the online status of the device to be updated * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: N/A * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_DEVICE_ACTIVITY_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_time** | **str** | Timestamp of when status changed was detected | [optional] 
**state** | **str** | State the device changed to | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_heartbeat_status_report import GoogleChromeManagementV1HeartbeatStatusReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1HeartbeatStatusReport from a JSON string
google_chrome_management_v1_heartbeat_status_report_instance = GoogleChromeManagementV1HeartbeatStatusReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1HeartbeatStatusReport.to_json())

# convert the object into a dict
google_chrome_management_v1_heartbeat_status_report_dict = google_chrome_management_v1_heartbeat_status_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1HeartbeatStatusReport from a dict
google_chrome_management_v1_heartbeat_status_report_from_dict = GoogleChromeManagementV1HeartbeatStatusReport.from_dict(google_chrome_management_v1_heartbeat_status_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


