# GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResults

Annotation results for a single video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**explicit_annotation** | [**GoogleCloudVideointelligenceV1p1beta1ExplicitContentAnnotation**](GoogleCloudVideointelligenceV1p1beta1ExplicitContentAnnotation.md) |  | [optional] 
**face_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1FaceAnnotation]**](GoogleCloudVideointelligenceV1p1beta1FaceAnnotation.md) | Deprecated. Please use &#x60;face_detection_annotations&#x60; instead. | [optional] 
**face_detection_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation]**](GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation.md) | Face detection annotations. | [optional] 
**frame_label_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1LabelAnnotation]**](GoogleCloudVideointelligenceV1p1beta1LabelAnnotation.md) | Label annotations on frame level. There is exactly one element for each unique label. | [optional] 
**input_uri** | **str** | Video file location in [Cloud Storage](https://cloud.google.com/storage/). | [optional] 
**logo_recognition_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1LogoRecognitionAnnotation]**](GoogleCloudVideointelligenceV1p1beta1LogoRecognitionAnnotation.md) | Annotations for list of logos detected, tracked and recognized in video. | [optional] 
**object_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1ObjectTrackingAnnotation]**](GoogleCloudVideointelligenceV1p1beta1ObjectTrackingAnnotation.md) | Annotations for list of objects detected and tracked in video. | [optional] 
**person_detection_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1PersonDetectionAnnotation]**](GoogleCloudVideointelligenceV1p1beta1PersonDetectionAnnotation.md) | Person detection annotations. | [optional] 
**segment** | [**GoogleCloudVideointelligenceV1p1beta1VideoSegment**](GoogleCloudVideointelligenceV1p1beta1VideoSegment.md) |  | [optional] 
**segment_label_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1LabelAnnotation]**](GoogleCloudVideointelligenceV1p1beta1LabelAnnotation.md) | Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label. | [optional] 
**segment_presence_label_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1LabelAnnotation]**](GoogleCloudVideointelligenceV1p1beta1LabelAnnotation.md) | Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical &#x60;segment_label_annotations&#x60;, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets &#x60;LabelDetectionConfig.model&#x60; to \&quot;builtin/latest\&quot; in the request. | [optional] 
**shot_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1VideoSegment]**](GoogleCloudVideointelligenceV1p1beta1VideoSegment.md) | Shot annotations. Each shot is represented as a video segment. | [optional] 
**shot_label_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1LabelAnnotation]**](GoogleCloudVideointelligenceV1p1beta1LabelAnnotation.md) | Topical label annotations on shot level. There is exactly one element for each unique label. | [optional] 
**shot_presence_label_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1LabelAnnotation]**](GoogleCloudVideointelligenceV1p1beta1LabelAnnotation.md) | Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical &#x60;shot_label_annotations&#x60;, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets &#x60;LabelDetectionConfig.model&#x60; to \&quot;builtin/latest\&quot; in the request. | [optional] 
**speech_transcriptions** | [**List[GoogleCloudVideointelligenceV1p1beta1SpeechTranscription]**](GoogleCloudVideointelligenceV1p1beta1SpeechTranscription.md) | Speech transcription. | [optional] 
**text_annotations** | [**List[GoogleCloudVideointelligenceV1p1beta1TextAnnotation]**](GoogleCloudVideointelligenceV1p1beta1TextAnnotation.md) | OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p1beta1_video_annotation_results import GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResults

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResults from a JSON string
google_cloud_videointelligence_v1p1beta1_video_annotation_results_instance = GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResults.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResults.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p1beta1_video_annotation_results_dict = google_cloud_videointelligence_v1p1beta1_video_annotation_results_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResults from a dict
google_cloud_videointelligence_v1p1beta1_video_annotation_results_from_dict = GoogleCloudVideointelligenceV1p1beta1VideoAnnotationResults.from_dict(google_cloud_videointelligence_v1p1beta1_video_annotation_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


