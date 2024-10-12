# ReleaseNotificationEvent

Payload proto for \"clouddeploy.googleapis.com/release_notification\" Platform Log event that describes the failure to send release status change Pub/Sub notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Debug message for when a notification fails to send. | [optional] 
**pipeline_uid** | **str** | Unique identifier of the &#x60;DeliveryPipeline&#x60;. | [optional] 
**release** | **str** | The name of the &#x60;Release&#x60;. | [optional] 
**release_uid** | **str** | Unique identifier of the &#x60;Release&#x60;. | [optional] 
**type** | **str** | Type of this notification, e.g. for a Pub/Sub failure. | [optional] 

## Example

```python
from openapi_client.models.release_notification_event import ReleaseNotificationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseNotificationEvent from a JSON string
release_notification_event_instance = ReleaseNotificationEvent.from_json(json)
# print the JSON string representation of the object
print(ReleaseNotificationEvent.to_json())

# convert the object into a dict
release_notification_event_dict = release_notification_event_instance.to_dict()
# create an instance of ReleaseNotificationEvent from a dict
release_notification_event_from_dict = ReleaseNotificationEvent.from_dict(release_notification_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


