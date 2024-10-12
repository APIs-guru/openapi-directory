# TargetNotificationEvent

Payload proto for \"clouddeploy.googleapis.com/target_notification\" Platform Log event that describes the failure to send target status change Pub/Sub notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Debug message for when a notification fails to send. | [optional] 
**target** | **str** | The name of the &#x60;Target&#x60;. | [optional] 
**type** | **str** | Type of this notification, e.g. for a Pub/Sub failure. | [optional] 

## Example

```python
from openapi_client.models.target_notification_event import TargetNotificationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TargetNotificationEvent from a JSON string
target_notification_event_instance = TargetNotificationEvent.from_json(json)
# print the JSON string representation of the object
print(TargetNotificationEvent.to_json())

# convert the object into a dict
target_notification_event_dict = target_notification_event_instance.to_dict()
# create an instance of TargetNotificationEvent from a dict
target_notification_event_from_dict = TargetNotificationEvent.from_dict(target_notification_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


