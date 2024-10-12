# GoogleCloudDatacatalogV1VertexDatasetSpec

Specification for vertex dataset resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_item_count** | **str** | The number of DataItems in this Dataset. Only apply for non-structured Dataset. | [optional] 
**data_type** | **str** | Type of the dataset. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_vertex_dataset_spec import GoogleCloudDatacatalogV1VertexDatasetSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1VertexDatasetSpec from a JSON string
google_cloud_datacatalog_v1_vertex_dataset_spec_instance = GoogleCloudDatacatalogV1VertexDatasetSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1VertexDatasetSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_vertex_dataset_spec_dict = google_cloud_datacatalog_v1_vertex_dataset_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1VertexDatasetSpec from a dict
google_cloud_datacatalog_v1_vertex_dataset_spec_from_dict = GoogleCloudDatacatalogV1VertexDatasetSpec.from_dict(google_cloud_datacatalog_v1_vertex_dataset_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


