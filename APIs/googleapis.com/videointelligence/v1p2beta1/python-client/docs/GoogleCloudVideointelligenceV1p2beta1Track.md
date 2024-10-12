# GoogleCloudVideointelligenceV1p2beta1Track

A track of an object instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[GoogleCloudVideointelligenceV1p2beta1DetectedAttribute]**](GoogleCloudVideointelligenceV1p2beta1DetectedAttribute.md) | Optional. Attributes in the track level. | [optional] 
**confidence** | **float** | Optional. The confidence score of the tracked object. | [optional] 
**segment** | [**GoogleCloudVideointelligenceV1p2beta1VideoSegment**](GoogleCloudVideointelligenceV1p2beta1VideoSegment.md) |  | [optional] 
**timestamped_objects** | [**List[GoogleCloudVideointelligenceV1p2beta1TimestampedObject]**](GoogleCloudVideointelligenceV1p2beta1TimestampedObject.md) | The object with timestamp and attributes per frame in the track. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p2beta1_track import GoogleCloudVideointelligenceV1p2beta1Track

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p2beta1Track from a JSON string
google_cloud_videointelligence_v1p2beta1_track_instance = GoogleCloudVideointelligenceV1p2beta1Track.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p2beta1Track.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p2beta1_track_dict = google_cloud_videointelligence_v1p2beta1_track_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p2beta1Track from a dict
google_cloud_videointelligence_v1p2beta1_track_from_dict = GoogleCloudVideointelligenceV1p2beta1Track.from_dict(google_cloud_videointelligence_v1p2beta1_track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


