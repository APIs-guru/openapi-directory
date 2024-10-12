# GoogleCloudVideointelligenceV1VideoContext

Video context and/or feature-specific parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_content_detection_config** | [**GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig**](GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig.md) |  | [optional] 
**face_detection_config** | [**GoogleCloudVideointelligenceV1FaceDetectionConfig**](GoogleCloudVideointelligenceV1FaceDetectionConfig.md) |  | [optional] 
**label_detection_config** | [**GoogleCloudVideointelligenceV1LabelDetectionConfig**](GoogleCloudVideointelligenceV1LabelDetectionConfig.md) |  | [optional] 
**object_tracking_config** | [**GoogleCloudVideointelligenceV1ObjectTrackingConfig**](GoogleCloudVideointelligenceV1ObjectTrackingConfig.md) |  | [optional] 
**person_detection_config** | [**GoogleCloudVideointelligenceV1PersonDetectionConfig**](GoogleCloudVideointelligenceV1PersonDetectionConfig.md) |  | [optional] 
**segments** | [**List[GoogleCloudVideointelligenceV1VideoSegment]**](GoogleCloudVideointelligenceV1VideoSegment.md) | Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment. | [optional] 
**shot_change_detection_config** | [**GoogleCloudVideointelligenceV1ShotChangeDetectionConfig**](GoogleCloudVideointelligenceV1ShotChangeDetectionConfig.md) |  | [optional] 
**speech_transcription_config** | [**GoogleCloudVideointelligenceV1SpeechTranscriptionConfig**](GoogleCloudVideointelligenceV1SpeechTranscriptionConfig.md) |  | [optional] 
**text_detection_config** | [**GoogleCloudVideointelligenceV1TextDetectionConfig**](GoogleCloudVideointelligenceV1TextDetectionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1_video_context import GoogleCloudVideointelligenceV1VideoContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1VideoContext from a JSON string
google_cloud_videointelligence_v1_video_context_instance = GoogleCloudVideointelligenceV1VideoContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1VideoContext.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1_video_context_dict = google_cloud_videointelligence_v1_video_context_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1VideoContext from a dict
google_cloud_videointelligence_v1_video_context_from_dict = GoogleCloudVideointelligenceV1VideoContext.from_dict(google_cloud_videointelligence_v1_video_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


