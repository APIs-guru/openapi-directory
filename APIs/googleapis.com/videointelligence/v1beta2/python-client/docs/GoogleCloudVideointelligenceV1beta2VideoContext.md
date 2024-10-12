# GoogleCloudVideointelligenceV1beta2VideoContext

Video context and/or feature-specific parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_content_detection_config** | [**GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig**](GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig.md) |  | [optional] 
**face_detection_config** | [**GoogleCloudVideointelligenceV1beta2FaceDetectionConfig**](GoogleCloudVideointelligenceV1beta2FaceDetectionConfig.md) |  | [optional] 
**label_detection_config** | [**GoogleCloudVideointelligenceV1beta2LabelDetectionConfig**](GoogleCloudVideointelligenceV1beta2LabelDetectionConfig.md) |  | [optional] 
**object_tracking_config** | [**GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig**](GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig.md) |  | [optional] 
**person_detection_config** | [**GoogleCloudVideointelligenceV1beta2PersonDetectionConfig**](GoogleCloudVideointelligenceV1beta2PersonDetectionConfig.md) |  | [optional] 
**segments** | [**List[GoogleCloudVideointelligenceV1beta2VideoSegment]**](GoogleCloudVideointelligenceV1beta2VideoSegment.md) | Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment. | [optional] 
**shot_change_detection_config** | [**GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig**](GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig.md) |  | [optional] 
**speech_transcription_config** | [**GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig**](GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig.md) |  | [optional] 
**text_detection_config** | [**GoogleCloudVideointelligenceV1beta2TextDetectionConfig**](GoogleCloudVideointelligenceV1beta2TextDetectionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_video_context import GoogleCloudVideointelligenceV1beta2VideoContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2VideoContext from a JSON string
google_cloud_videointelligence_v1beta2_video_context_instance = GoogleCloudVideointelligenceV1beta2VideoContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2VideoContext.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_video_context_dict = google_cloud_videointelligence_v1beta2_video_context_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2VideoContext from a dict
google_cloud_videointelligence_v1beta2_video_context_from_dict = GoogleCloudVideointelligenceV1beta2VideoContext.from_dict(google_cloud_videointelligence_v1beta2_video_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


