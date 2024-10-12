# GoogleCloudVideointelligenceV1p3beta1CelebrityTrack

The annotation result of a celebrity face track. RecognizedCelebrity field could be empty if the face track does not have any matched celebrities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**celebrities** | [**List[GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity]**](GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity.md) | Top N match of the celebrities for the face in this track. | [optional] 
**face_track** | [**GoogleCloudVideointelligenceV1p3beta1Track**](GoogleCloudVideointelligenceV1p3beta1Track.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_celebrity_track import GoogleCloudVideointelligenceV1p3beta1CelebrityTrack

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1CelebrityTrack from a JSON string
google_cloud_videointelligence_v1p3beta1_celebrity_track_instance = GoogleCloudVideointelligenceV1p3beta1CelebrityTrack.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1CelebrityTrack.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_celebrity_track_dict = google_cloud_videointelligence_v1p3beta1_celebrity_track_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1CelebrityTrack from a dict
google_cloud_videointelligence_v1p3beta1_celebrity_track_from_dict = GoogleCloudVideointelligenceV1p3beta1CelebrityTrack.from_dict(google_cloud_videointelligence_v1p3beta1_celebrity_track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


