# GoogleChromeManagementV1TelemetryNotificationFilter

Configures how the telemetry data should be filtered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | If set, only sends notifications for telemetry data coming from this device. | [optional] 
**device_org_unit_id** | **str** | If set, only sends notifications for telemetry data coming from devices in this org unit. | [optional] 
**telemetry_event_notification_filter** | [**GoogleChromeManagementV1TelemetryEventNotificationFilter**](GoogleChromeManagementV1TelemetryEventNotificationFilter.md) |  | [optional] 
**user_email** | **str** | If set, only sends notifications for telemetry data coming from devices owned by this user. | [optional] 
**user_org_unit_id** | **str** | If set, only sends notifications for telemetry data coming from devices owned by users in this org unit. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_notification_filter import GoogleChromeManagementV1TelemetryNotificationFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryNotificationFilter from a JSON string
google_chrome_management_v1_telemetry_notification_filter_instance = GoogleChromeManagementV1TelemetryNotificationFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryNotificationFilter.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_notification_filter_dict = google_chrome_management_v1_telemetry_notification_filter_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryNotificationFilter from a dict
google_chrome_management_v1_telemetry_notification_filter_from_dict = GoogleChromeManagementV1TelemetryNotificationFilter.from_dict(google_chrome_management_v1_telemetry_notification_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


