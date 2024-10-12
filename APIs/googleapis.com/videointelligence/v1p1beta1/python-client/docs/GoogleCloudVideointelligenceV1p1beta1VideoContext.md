# GoogleCloudVideointelligenceV1p1beta1VideoContext

Video context and/or feature-specific parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_content_detection_config** | [**GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig**](GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig.md) |  | [optional] 
**face_detection_config** | [**GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig**](GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig.md) |  | [optional] 
**label_detection_config** | [**GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig**](GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig.md) |  | [optional] 
**object_tracking_config** | [**GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig**](GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig.md) |  | [optional] 
**person_detection_config** | [**GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig**](GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig.md) |  | [optional] 
**segments** | [**List[GoogleCloudVideointelligenceV1p1beta1VideoSegment]**](GoogleCloudVideointelligenceV1p1beta1VideoSegment.md) | Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment. | [optional] 
**shot_change_detection_config** | [**GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig**](GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig.md) |  | [optional] 
**speech_transcription_config** | [**GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig**](GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig.md) |  | [optional] 
**text_detection_config** | [**GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig**](GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p1beta1_video_context import GoogleCloudVideointelligenceV1p1beta1VideoContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p1beta1VideoContext from a JSON string
google_cloud_videointelligence_v1p1beta1_video_context_instance = GoogleCloudVideointelligenceV1p1beta1VideoContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p1beta1VideoContext.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p1beta1_video_context_dict = google_cloud_videointelligence_v1p1beta1_video_context_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p1beta1VideoContext from a dict
google_cloud_videointelligence_v1p1beta1_video_context_from_dict = GoogleCloudVideointelligenceV1p1beta1VideoContext.from_dict(google_cloud_videointelligence_v1p1beta1_video_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


