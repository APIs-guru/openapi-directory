# GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotation

Celebrity recognition annotation per video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**celebrity_tracks** | [**List[GoogleCloudVideointelligenceV1p3beta1CelebrityTrack]**](GoogleCloudVideointelligenceV1p3beta1CelebrityTrack.md) | The tracks detected from the input video, including recognized celebrities and other detected faces in the video. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_celebrity_recognition_annotation import GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotation from a JSON string
google_cloud_videointelligence_v1p3beta1_celebrity_recognition_annotation_instance = GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_celebrity_recognition_annotation_dict = google_cloud_videointelligence_v1p3beta1_celebrity_recognition_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotation from a dict
google_cloud_videointelligence_v1p3beta1_celebrity_recognition_annotation_from_dict = GoogleCloudVideointelligenceV1p3beta1CelebrityRecognitionAnnotation.from_dict(google_cloud_videointelligence_v1p3beta1_celebrity_recognition_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


