# GoogleCloudVideointelligenceV1DetectedLandmark

A generic detected landmark represented by name in string format and a 2D location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The confidence score of the detected landmark. Range [0, 1]. | [optional] 
**name** | **str** | The name of this landmark, for example, left_hand, right_shoulder. | [optional] 
**point** | [**GoogleCloudVideointelligenceV1NormalizedVertex**](GoogleCloudVideointelligenceV1NormalizedVertex.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1_detected_landmark import GoogleCloudVideointelligenceV1DetectedLandmark

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1DetectedLandmark from a JSON string
google_cloud_videointelligence_v1_detected_landmark_instance = GoogleCloudVideointelligenceV1DetectedLandmark.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1DetectedLandmark.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1_detected_landmark_dict = google_cloud_videointelligence_v1_detected_landmark_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1DetectedLandmark from a dict
google_cloud_videointelligence_v1_detected_landmark_from_dict = GoogleCloudVideointelligenceV1DetectedLandmark.from_dict(google_cloud_videointelligence_v1_detected_landmark_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


