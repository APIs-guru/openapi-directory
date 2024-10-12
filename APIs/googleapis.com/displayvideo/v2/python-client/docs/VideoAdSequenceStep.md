# VideoAdSequenceStep

The detail of a single step in a VideoAdSequence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | The ID of the corresponding ad group of the step. | [optional] 
**interaction_type** | **str** | The interaction on the previous step that will lead the viewer to this step. The first step does not have interaction_type. | [optional] 
**previous_step_id** | **str** | The ID of the previous step. The first step does not have previous step. | [optional] 
**step_id** | **str** | The ID of the step. | [optional] 

## Example

```python
from openapi_client.models.video_ad_sequence_step import VideoAdSequenceStep

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAdSequenceStep from a JSON string
video_ad_sequence_step_instance = VideoAdSequenceStep.from_json(json)
# print the JSON string representation of the object
print(VideoAdSequenceStep.to_json())

# convert the object into a dict
video_ad_sequence_step_dict = video_ad_sequence_step_instance.to_dict()
# create an instance of VideoAdSequenceStep from a dict
video_ad_sequence_step_from_dict = VideoAdSequenceStep.from_dict(video_ad_sequence_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


