# GoogleCloudVisionV1p4beta1NormalizedVertex

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **float** | X coordinate. | [optional] 
**y** | **float** | Y coordinate. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_normalized_vertex import GoogleCloudVisionV1p4beta1NormalizedVertex

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1NormalizedVertex from a JSON string
google_cloud_vision_v1p4beta1_normalized_vertex_instance = GoogleCloudVisionV1p4beta1NormalizedVertex.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1NormalizedVertex.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_normalized_vertex_dict = google_cloud_vision_v1p4beta1_normalized_vertex_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1NormalizedVertex from a dict
google_cloud_vision_v1p4beta1_normalized_vertex_from_dict = GoogleCloudVisionV1p4beta1NormalizedVertex.from_dict(google_cloud_vision_v1p4beta1_normalized_vertex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


