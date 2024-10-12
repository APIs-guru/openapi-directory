# GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation

Video object tracking annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec** | [**GoogleCloudDatalabelingV1beta1AnnotationSpec**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) |  | [optional] 
**object_tracking_frames** | [**List[GoogleCloudDatalabelingV1beta1ObjectTrackingFrame]**](GoogleCloudDatalabelingV1beta1ObjectTrackingFrame.md) | The list of frames where this object track appears. | [optional] 
**time_segment** | [**GoogleCloudDatalabelingV1beta1TimeSegment**](GoogleCloudDatalabelingV1beta1TimeSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_video_object_tracking_annotation import GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation from a JSON string
google_cloud_datalabeling_v1beta1_video_object_tracking_annotation_instance = GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_video_object_tracking_annotation_dict = google_cloud_datalabeling_v1beta1_video_object_tracking_annotation_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation from a dict
google_cloud_datalabeling_v1beta1_video_object_tracking_annotation_from_dict = GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation.from_dict(google_cloud_datalabeling_v1beta1_video_object_tracking_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


