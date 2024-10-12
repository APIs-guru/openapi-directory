# RolloutNotificationEvent

Payload proto for \"clouddeploy.googleapis.com/rollout_notification\" Platform Log event that describes the failure to send rollout status change Pub/Sub notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Debug message for when a notification fails to send. | [optional] 
**pipeline_uid** | **str** | Unique identifier of the &#x60;DeliveryPipeline&#x60;. | [optional] 
**release** | **str** | The name of the &#x60;Release&#x60;. | [optional] 
**release_uid** | **str** | Unique identifier of the &#x60;Release&#x60;. | [optional] 
**rollout** | **str** | The name of the &#x60;Rollout&#x60;. | [optional] 
**rollout_uid** | **str** | Unique identifier of the &#x60;Rollout&#x60;. | [optional] 
**target_id** | **str** | ID of the &#x60;Target&#x60; that the rollout is deployed to. | [optional] 
**type** | **str** | Type of this notification, e.g. for a Pub/Sub failure. | [optional] 

## Example

```python
from openapi_client.models.rollout_notification_event import RolloutNotificationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of RolloutNotificationEvent from a JSON string
rollout_notification_event_instance = RolloutNotificationEvent.from_json(json)
# print the JSON string representation of the object
print(RolloutNotificationEvent.to_json())

# convert the object into a dict
rollout_notification_event_dict = rollout_notification_event_instance.to_dict()
# create an instance of RolloutNotificationEvent from a dict
rollout_notification_event_from_dict = RolloutNotificationEvent.from_dict(rollout_notification_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


