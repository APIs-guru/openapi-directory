# GoogleCloudDocumentaiV1beta3Vertex

A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **int** | X coordinate. | [optional] 
**y** | **int** | Y coordinate (starts from the top of the image). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_vertex import GoogleCloudDocumentaiV1beta3Vertex

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3Vertex from a JSON string
google_cloud_documentai_v1beta3_vertex_instance = GoogleCloudDocumentaiV1beta3Vertex.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3Vertex.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_vertex_dict = google_cloud_documentai_v1beta3_vertex_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3Vertex from a dict
google_cloud_documentai_v1beta3_vertex_from_dict = GoogleCloudDocumentaiV1beta3Vertex.from_dict(google_cloud_documentai_v1beta3_vertex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


