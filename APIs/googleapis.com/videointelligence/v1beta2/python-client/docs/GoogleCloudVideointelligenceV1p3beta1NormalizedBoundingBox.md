# GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBox

Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom** | **float** | Bottom Y coordinate. | [optional] 
**left** | **float** | Left X coordinate. | [optional] 
**right** | **float** | Right X coordinate. | [optional] 
**top** | **float** | Top Y coordinate. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_normalized_bounding_box import GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBox

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBox from a JSON string
google_cloud_videointelligence_v1p3beta1_normalized_bounding_box_instance = GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBox.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBox.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_normalized_bounding_box_dict = google_cloud_videointelligence_v1p3beta1_normalized_bounding_box_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBox from a dict
google_cloud_videointelligence_v1p3beta1_normalized_bounding_box_from_dict = GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingBox.from_dict(google_cloud_videointelligence_v1p3beta1_normalized_bounding_box_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


