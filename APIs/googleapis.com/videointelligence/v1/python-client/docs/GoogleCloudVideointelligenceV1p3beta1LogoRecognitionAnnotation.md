# GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotation

Annotation corresponding to one detected, tracked and recognized logo class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**GoogleCloudVideointelligenceV1p3beta1Entity**](GoogleCloudVideointelligenceV1p3beta1Entity.md) |  | [optional] 
**segments** | [**List[GoogleCloudVideointelligenceV1p3beta1VideoSegment]**](GoogleCloudVideointelligenceV1p3beta1VideoSegment.md) | All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment. | [optional] 
**tracks** | [**List[GoogleCloudVideointelligenceV1p3beta1Track]**](GoogleCloudVideointelligenceV1p3beta1Track.md) | All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_logo_recognition_annotation import GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotation from a JSON string
google_cloud_videointelligence_v1p3beta1_logo_recognition_annotation_instance = GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_logo_recognition_annotation_dict = google_cloud_videointelligence_v1p3beta1_logo_recognition_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotation from a dict
google_cloud_videointelligence_v1p3beta1_logo_recognition_annotation_from_dict = GoogleCloudVideointelligenceV1p3beta1LogoRecognitionAnnotation.from_dict(google_cloud_videointelligence_v1p3beta1_logo_recognition_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


