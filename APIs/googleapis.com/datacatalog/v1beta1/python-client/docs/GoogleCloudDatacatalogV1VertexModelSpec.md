# GoogleCloudDatacatalogV1VertexModelSpec

Specification for vertex model resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_image_uri** | **str** | URI of the Docker image to be used as the custom container for serving predictions. | [optional] 
**version_aliases** | **List[str]** | User provided version aliases so that a model version can be referenced via alias | [optional] 
**version_description** | **str** | The description of this version. | [optional] 
**version_id** | **str** | The version ID of the model. | [optional] 
**vertex_model_source_info** | [**GoogleCloudDatacatalogV1VertexModelSourceInfo**](GoogleCloudDatacatalogV1VertexModelSourceInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_vertex_model_spec import GoogleCloudDatacatalogV1VertexModelSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1VertexModelSpec from a JSON string
google_cloud_datacatalog_v1_vertex_model_spec_instance = GoogleCloudDatacatalogV1VertexModelSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1VertexModelSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_vertex_model_spec_dict = google_cloud_datacatalog_v1_vertex_model_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1VertexModelSpec from a dict
google_cloud_datacatalog_v1_vertex_model_spec_from_dict = GoogleCloudDatacatalogV1VertexModelSpec.from_dict(google_cloud_datacatalog_v1_vertex_model_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


