# GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotation

Person detection annotation per video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tracks** | [**List[GoogleCloudVideointelligenceV1p2beta1Track]**](GoogleCloudVideointelligenceV1p2beta1Track.md) | The detected tracks of a person. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p2beta1_person_detection_annotation import GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotation from a JSON string
google_cloud_videointelligence_v1p2beta1_person_detection_annotation_instance = GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p2beta1_person_detection_annotation_dict = google_cloud_videointelligence_v1p2beta1_person_detection_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotation from a dict
google_cloud_videointelligence_v1p2beta1_person_detection_annotation_from_dict = GoogleCloudVideointelligenceV1p2beta1PersonDetectionAnnotation.from_dict(google_cloud_videointelligence_v1p2beta1_person_detection_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


