# GoogleCloudVideointelligenceV1beta2VideoAnnotationResults

Annotation results for a single video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**explicit_annotation** | [**GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation**](GoogleCloudVideointelligenceV1beta2ExplicitContentAnnotation.md) |  | [optional] 
**face_annotations** | [**List[GoogleCloudVideointelligenceV1beta2FaceAnnotation]**](GoogleCloudVideointelligenceV1beta2FaceAnnotation.md) | Deprecated. Please use &#x60;face_detection_annotations&#x60; instead. | [optional] 
**face_detection_annotations** | [**List[GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation]**](GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation.md) | Face detection annotations. | [optional] 
**frame_label_annotations** | [**List[GoogleCloudVideointelligenceV1beta2LabelAnnotation]**](GoogleCloudVideointelligenceV1beta2LabelAnnotation.md) | Label annotations on frame level. There is exactly one element for each unique label. | [optional] 
**input_uri** | **str** | Video file location in [Cloud Storage](https://cloud.google.com/storage/). | [optional] 
**logo_recognition_annotations** | [**List[GoogleCloudVideointelligenceV1beta2LogoRecognitionAnnotation]**](GoogleCloudVideointelligenceV1beta2LogoRecognitionAnnotation.md) | Annotations for list of logos detected, tracked and recognized in video. | [optional] 
**object_annotations** | [**List[GoogleCloudVideointelligenceV1beta2ObjectTrackingAnnotation]**](GoogleCloudVideointelligenceV1beta2ObjectTrackingAnnotation.md) | Annotations for list of objects detected and tracked in video. | [optional] 
**person_detection_annotations** | [**List[GoogleCloudVideointelligenceV1beta2PersonDetectionAnnotation]**](GoogleCloudVideointelligenceV1beta2PersonDetectionAnnotation.md) | Person detection annotations. | [optional] 
**segment** | [**GoogleCloudVideointelligenceV1beta2VideoSegment**](GoogleCloudVideointelligenceV1beta2VideoSegment.md) |  | [optional] 
**segment_label_annotations** | [**List[GoogleCloudVideointelligenceV1beta2LabelAnnotation]**](GoogleCloudVideointelligenceV1beta2LabelAnnotation.md) | Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label. | [optional] 
**segment_presence_label_annotations** | [**List[GoogleCloudVideointelligenceV1beta2LabelAnnotation]**](GoogleCloudVideointelligenceV1beta2LabelAnnotation.md) | Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical &#x60;segment_label_annotations&#x60;, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets &#x60;LabelDetectionConfig.model&#x60; to \&quot;builtin/latest\&quot; in the request. | [optional] 
**shot_annotations** | [**List[GoogleCloudVideointelligenceV1beta2VideoSegment]**](GoogleCloudVideointelligenceV1beta2VideoSegment.md) | Shot annotations. Each shot is represented as a video segment. | [optional] 
**shot_label_annotations** | [**List[GoogleCloudVideointelligenceV1beta2LabelAnnotation]**](GoogleCloudVideointelligenceV1beta2LabelAnnotation.md) | Topical label annotations on shot level. There is exactly one element for each unique label. | [optional] 
**shot_presence_label_annotations** | [**List[GoogleCloudVideointelligenceV1beta2LabelAnnotation]**](GoogleCloudVideointelligenceV1beta2LabelAnnotation.md) | Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical &#x60;shot_label_annotations&#x60;, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets &#x60;LabelDetectionConfig.model&#x60; to \&quot;builtin/latest\&quot; in the request. | [optional] 
**speech_transcriptions** | [**List[GoogleCloudVideointelligenceV1beta2SpeechTranscription]**](GoogleCloudVideointelligenceV1beta2SpeechTranscription.md) | Speech transcription. | [optional] 
**text_annotations** | [**List[GoogleCloudVideointelligenceV1beta2TextAnnotation]**](GoogleCloudVideointelligenceV1beta2TextAnnotation.md) | OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_video_annotation_results import GoogleCloudVideointelligenceV1beta2VideoAnnotationResults

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2VideoAnnotationResults from a JSON string
google_cloud_videointelligence_v1beta2_video_annotation_results_instance = GoogleCloudVideointelligenceV1beta2VideoAnnotationResults.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2VideoAnnotationResults.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_video_annotation_results_dict = google_cloud_videointelligence_v1beta2_video_annotation_results_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2VideoAnnotationResults from a dict
google_cloud_videointelligence_v1beta2_video_annotation_results_from_dict = GoogleCloudVideointelligenceV1beta2VideoAnnotationResults.from_dict(google_cloud_videointelligence_v1beta2_video_annotation_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


