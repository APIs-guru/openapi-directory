# GoogleChromeManagementV1TelemetryNotificationConfig

Configuration to receive notifications of telemetry data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Output only. Google Workspace customer that owns the resource. | [optional] [readonly] 
**filter** | [**GoogleChromeManagementV1TelemetryNotificationFilter**](GoogleChromeManagementV1TelemetryNotificationFilter.md) |  | [optional] 
**google_cloud_pubsub_topic** | **str** | The pubsub topic to which notifications are published to. | [optional] 
**name** | **str** | Output only. Resource name of the notification configuration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_notification_config import GoogleChromeManagementV1TelemetryNotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryNotificationConfig from a JSON string
google_chrome_management_v1_telemetry_notification_config_instance = GoogleChromeManagementV1TelemetryNotificationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryNotificationConfig.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_notification_config_dict = google_chrome_management_v1_telemetry_notification_config_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryNotificationConfig from a dict
google_chrome_management_v1_telemetry_notification_config_from_dict = GoogleChromeManagementV1TelemetryNotificationConfig.from_dict(google_chrome_management_v1_telemetry_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


