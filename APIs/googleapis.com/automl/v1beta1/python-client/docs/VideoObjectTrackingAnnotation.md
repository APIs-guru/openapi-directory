# VideoObjectTrackingAnnotation

Annotation details for video object tracking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | [**BoundingPoly**](BoundingPoly.md) |  | [optional] 
**instance_id** | **str** | Optional. The instance of the object, expressed as a positive integer. Used to tell apart objects of the same type (i.e. AnnotationSpec) when multiple are present on a single example. NOTE: Instance ID prediction quality is not a part of model evaluation and is done as best effort. Especially in cases when an entity goes off-screen for a longer time (minutes), when it comes back it may be given a new instance ID. | [optional] 
**score** | **float** | Output only. The confidence that this annotation is positive for the video at the time_offset, value in [0, 1], higher means higher positivity confidence. For annotations created by the user the score is 1. When user approves an annotation, the original float score is kept (and not changed to 1). | [optional] 
**time_offset** | **str** | Required. A time (frame) of a video to which this annotation pertains. Represented as the duration since the video&#39;s start. | [optional] 

## Example

```python
from openapi_client.models.video_object_tracking_annotation import VideoObjectTrackingAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of VideoObjectTrackingAnnotation from a JSON string
video_object_tracking_annotation_instance = VideoObjectTrackingAnnotation.from_json(json)
# print the JSON string representation of the object
print(VideoObjectTrackingAnnotation.to_json())

# convert the object into a dict
video_object_tracking_annotation_dict = video_object_tracking_annotation_instance.to_dict()
# create an instance of VideoObjectTrackingAnnotation from a dict
video_object_tracking_annotation_from_dict = VideoObjectTrackingAnnotation.from_dict(video_object_tracking_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


