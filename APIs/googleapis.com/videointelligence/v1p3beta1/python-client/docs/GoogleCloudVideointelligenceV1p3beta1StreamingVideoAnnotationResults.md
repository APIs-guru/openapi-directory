# GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults

Streaming annotation results corresponding to a portion of the video that is currently being processed. Only ONE type of annotation will be specified in the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_annotation** | [**GoogleCloudVideointelligenceV1p3beta1ExplicitContentAnnotation**](GoogleCloudVideointelligenceV1p3beta1ExplicitContentAnnotation.md) |  | [optional] 
**frame_timestamp** | **str** | Timestamp of the processed frame in microseconds. | [optional] 
**label_annotations** | [**List[GoogleCloudVideointelligenceV1p3beta1LabelAnnotation]**](GoogleCloudVideointelligenceV1p3beta1LabelAnnotation.md) | Label annotation results. | [optional] 
**object_annotations** | [**List[GoogleCloudVideointelligenceV1p3beta1ObjectTrackingAnnotation]**](GoogleCloudVideointelligenceV1p3beta1ObjectTrackingAnnotation.md) | Object tracking results. | [optional] 
**shot_annotations** | [**List[GoogleCloudVideointelligenceV1p3beta1VideoSegment]**](GoogleCloudVideointelligenceV1p3beta1VideoSegment.md) | Shot annotation results. Each shot is represented as a video segment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_streaming_video_annotation_results import GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults from a JSON string
google_cloud_videointelligence_v1p3beta1_streaming_video_annotation_results_instance = GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_streaming_video_annotation_results_dict = google_cloud_videointelligence_v1p3beta1_streaming_video_annotation_results_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults from a dict
google_cloud_videointelligence_v1p3beta1_streaming_video_annotation_results_from_dict = GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults.from_dict(google_cloud_videointelligence_v1p3beta1_streaming_video_annotation_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


