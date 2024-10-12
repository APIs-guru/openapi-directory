# EventNotificationConfig

The configuration for forwarding telemetry events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_topic_name** | **str** | A Cloud Pub/Sub topic name. For example, &#x60;projects/myProject/topics/deviceEvents&#x60;. | [optional] 
**subfolder_matches** | **str** | If the subfolder name matches this string exactly, this configuration will be used. The string must not include the leading &#39;/&#39; character. If empty, all strings are matched. This field is used only for telemetry events; subfolders are not supported for state changes. | [optional] 

## Example

```python
from openapi_client.models.event_notification_config import EventNotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EventNotificationConfig from a JSON string
event_notification_config_instance = EventNotificationConfig.from_json(json)
# print the JSON string representation of the object
print(EventNotificationConfig.to_json())

# convert the object into a dict
event_notification_config_dict = event_notification_config_instance.to_dict()
# create an instance of EventNotificationConfig from a dict
event_notification_config_from_dict = EventNotificationConfig.from_dict(event_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


