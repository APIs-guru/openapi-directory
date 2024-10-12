# GoogleCloudDatalabelingV1beta1Vertex

A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **int** | X coordinate. | [optional] 
**y** | **int** | Y coordinate. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_vertex import GoogleCloudDatalabelingV1beta1Vertex

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1Vertex from a JSON string
google_cloud_datalabeling_v1beta1_vertex_instance = GoogleCloudDatalabelingV1beta1Vertex.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1Vertex.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_vertex_dict = google_cloud_datalabeling_v1beta1_vertex_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1Vertex from a dict
google_cloud_datalabeling_v1beta1_vertex_from_dict = GoogleCloudDatalabelingV1beta1Vertex.from_dict(google_cloud_datalabeling_v1beta1_vertex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


