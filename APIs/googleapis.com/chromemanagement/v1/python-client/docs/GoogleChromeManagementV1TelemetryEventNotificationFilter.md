# GoogleChromeManagementV1TelemetryEventNotificationFilter

Configures how the telemetry events should be filtered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_types** | **List[str]** | Only sends the notifications for events of these types. Must not be empty. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_event_notification_filter import GoogleChromeManagementV1TelemetryEventNotificationFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryEventNotificationFilter from a JSON string
google_chrome_management_v1_telemetry_event_notification_filter_instance = GoogleChromeManagementV1TelemetryEventNotificationFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryEventNotificationFilter.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_event_notification_filter_dict = google_chrome_management_v1_telemetry_event_notification_filter_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryEventNotificationFilter from a dict
google_chrome_management_v1_telemetry_event_notification_filter_from_dict = GoogleChromeManagementV1TelemetryEventNotificationFilter.from_dict(google_chrome_management_v1_telemetry_event_notification_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


