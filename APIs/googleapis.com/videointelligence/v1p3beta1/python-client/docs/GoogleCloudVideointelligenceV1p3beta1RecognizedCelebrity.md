# GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity

The recognized celebrity with confidence score.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**celebrity** | [**GoogleCloudVideointelligenceV1p3beta1Celebrity**](GoogleCloudVideointelligenceV1p3beta1Celebrity.md) |  | [optional] 
**confidence** | **float** | Recognition confidence. Range [0, 1]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_recognized_celebrity import GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity from a JSON string
google_cloud_videointelligence_v1p3beta1_recognized_celebrity_instance = GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_recognized_celebrity_dict = google_cloud_videointelligence_v1p3beta1_recognized_celebrity_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity from a dict
google_cloud_videointelligence_v1p3beta1_recognized_celebrity_from_dict = GoogleCloudVideointelligenceV1p3beta1RecognizedCelebrity.from_dict(google_cloud_videointelligence_v1p3beta1_recognized_celebrity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


