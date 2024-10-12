# RolloutUpdateEvent

Payload proto for \"clouddeploy.googleapis.com/rollout_update\" Platform Log event that describes the rollout update event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Debug message for when a rollout update event occurs. | [optional] 
**pipeline_uid** | **str** | Unique identifier of the pipeline. | [optional] 
**release** | **str** | The name of the &#x60;Release&#x60;. | [optional] 
**release_uid** | **str** | Unique identifier of the release. | [optional] 
**rollout** | **str** | The name of the rollout. rollout_uid is not in this log message because we write some of these log messages at rollout creation time, before we&#39;ve generated the uid. | [optional] 
**rollout_update_type** | **str** | The type of the rollout update. | [optional] 
**target_id** | **str** | ID of the target. | [optional] 
**type** | **str** | Type of this notification, e.g. for a rollout update event. | [optional] 

## Example

```python
from openapi_client.models.rollout_update_event import RolloutUpdateEvent

# TODO update the JSON string below
json = "{}"
# create an instance of RolloutUpdateEvent from a JSON string
rollout_update_event_instance = RolloutUpdateEvent.from_json(json)
# print the JSON string representation of the object
print(RolloutUpdateEvent.to_json())

# convert the object into a dict
rollout_update_event_dict = rollout_update_event_instance.to_dict()
# create an instance of RolloutUpdateEvent from a dict
rollout_update_event_from_dict = RolloutUpdateEvent.from_dict(rollout_update_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


