# GoogleCloudDatacatalogV1DatasetSpec

Specification that applies to a dataset. Valid only for entries with the `DATASET` type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vertex_dataset_spec** | [**GoogleCloudDatacatalogV1VertexDatasetSpec**](GoogleCloudDatacatalogV1VertexDatasetSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_dataset_spec import GoogleCloudDatacatalogV1DatasetSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1DatasetSpec from a JSON string
google_cloud_datacatalog_v1_dataset_spec_instance = GoogleCloudDatacatalogV1DatasetSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1DatasetSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_dataset_spec_dict = google_cloud_datacatalog_v1_dataset_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1DatasetSpec from a dict
google_cloud_datacatalog_v1_dataset_spec_from_dict = GoogleCloudDatacatalogV1DatasetSpec.from_dict(google_cloud_datacatalog_v1_dataset_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


