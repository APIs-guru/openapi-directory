# GoogleCloudAiplatformV1beta1SchemaVertex

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **float** | X coordinate. | [optional] 
**y** | **float** | Y coordinate. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_vertex import GoogleCloudAiplatformV1beta1SchemaVertex

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaVertex from a JSON string
google_cloud_aiplatform_v1beta1_schema_vertex_instance = GoogleCloudAiplatformV1beta1SchemaVertex.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaVertex.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_vertex_dict = google_cloud_aiplatform_v1beta1_schema_vertex_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaVertex from a dict
google_cloud_aiplatform_v1beta1_schema_vertex_from_dict = GoogleCloudAiplatformV1beta1SchemaVertex.from_dict(google_cloud_aiplatform_v1beta1_schema_vertex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


