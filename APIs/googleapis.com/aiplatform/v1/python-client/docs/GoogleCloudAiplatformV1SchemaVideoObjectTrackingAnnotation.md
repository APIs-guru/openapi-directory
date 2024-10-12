# GoogleCloudAiplatformV1SchemaVideoObjectTrackingAnnotation

Annotation details specific to video object tracking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id** | **str** | The resource Id of the AnnotationSpec that this Annotation pertains to. | [optional] 
**display_name** | **str** | The display name of the AnnotationSpec that this Annotation pertains to. | [optional] 
**instance_id** | **str** | The instance of the object, expressed as a positive integer. Used to track the same object across different frames. | [optional] 
**time_offset** | **str** | A time (frame) of a video to which this annotation pertains. Represented as the duration since the video&#39;s start. | [optional] 
**x_max** | **float** | The rightmost coordinate of the bounding box. | [optional] 
**x_min** | **float** | The leftmost coordinate of the bounding box. | [optional] 
**y_max** | **float** | The bottommost coordinate of the bounding box. | [optional] 
**y_min** | **float** | The topmost coordinate of the bounding box. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_video_object_tracking_annotation import GoogleCloudAiplatformV1SchemaVideoObjectTrackingAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaVideoObjectTrackingAnnotation from a JSON string
google_cloud_aiplatform_v1_schema_video_object_tracking_annotation_instance = GoogleCloudAiplatformV1SchemaVideoObjectTrackingAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaVideoObjectTrackingAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_video_object_tracking_annotation_dict = google_cloud_aiplatform_v1_schema_video_object_tracking_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaVideoObjectTrackingAnnotation from a dict
google_cloud_aiplatform_v1_schema_video_object_tracking_annotation_from_dict = GoogleCloudAiplatformV1SchemaVideoObjectTrackingAnnotation.from_dict(google_cloud_aiplatform_v1_schema_video_object_tracking_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


