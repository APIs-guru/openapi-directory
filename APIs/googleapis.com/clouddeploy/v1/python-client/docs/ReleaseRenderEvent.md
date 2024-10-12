# ReleaseRenderEvent

Payload proto for \"clouddeploy.googleapis.com/release_render\" Platform Log event that describes the render status change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Debug message for when a render transition occurs. Provides further details as rendering progresses through render states. | [optional] 
**pipeline_uid** | **str** | Unique identifier of the &#x60;DeliveryPipeline&#x60;. | [optional] 
**release** | **str** | The name of the release. release_uid is not in this log message because we write some of these log messages at release creation time, before we&#39;ve generated the uid. | [optional] 
**release_render_state** | **str** | The state of the release render. | [optional] 
**type** | **str** | Type of this notification, e.g. for a release render state change event. | [optional] 

## Example

```python
from openapi_client.models.release_render_event import ReleaseRenderEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseRenderEvent from a JSON string
release_render_event_instance = ReleaseRenderEvent.from_json(json)
# print the JSON string representation of the object
print(ReleaseRenderEvent.to_json())

# convert the object into a dict
release_render_event_dict = release_render_event_instance.to_dict()
# create an instance of ReleaseRenderEvent from a dict
release_render_event_from_dict = ReleaseRenderEvent.from_dict(release_render_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


