# GoogleCloudVideointelligenceV1p3beta1NormalizedVertex

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **float** | X coordinate. | [optional] 
**y** | **float** | Y coordinate. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_normalized_vertex import GoogleCloudVideointelligenceV1p3beta1NormalizedVertex

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1NormalizedVertex from a JSON string
google_cloud_videointelligence_v1p3beta1_normalized_vertex_instance = GoogleCloudVideointelligenceV1p3beta1NormalizedVertex.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1NormalizedVertex.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_normalized_vertex_dict = google_cloud_videointelligence_v1p3beta1_normalized_vertex_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1NormalizedVertex from a dict
google_cloud_videointelligence_v1p3beta1_normalized_vertex_from_dict = GoogleCloudVideointelligenceV1p3beta1NormalizedVertex.from_dict(google_cloud_videointelligence_v1p3beta1_normalized_vertex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


