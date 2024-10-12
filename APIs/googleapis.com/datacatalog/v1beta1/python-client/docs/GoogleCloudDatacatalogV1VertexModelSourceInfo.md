# GoogleCloudDatacatalogV1VertexModelSourceInfo

Detail description of the source information of a Vertex model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy** | **bool** | If this Model is copy of another Model. If true then source_type pertains to the original. | [optional] 
**source_type** | **str** | Type of the model source. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_vertex_model_source_info import GoogleCloudDatacatalogV1VertexModelSourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1VertexModelSourceInfo from a JSON string
google_cloud_datacatalog_v1_vertex_model_source_info_instance = GoogleCloudDatacatalogV1VertexModelSourceInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1VertexModelSourceInfo.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_vertex_model_source_info_dict = google_cloud_datacatalog_v1_vertex_model_source_info_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1VertexModelSourceInfo from a dict
google_cloud_datacatalog_v1_vertex_model_source_info_from_dict = GoogleCloudDatacatalogV1VertexModelSourceInfo.from_dict(google_cloud_datacatalog_v1_vertex_model_source_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


