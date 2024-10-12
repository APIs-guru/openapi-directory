# GoogleCloudAiplatformV1SchemaTablesDatasetMetadata

The metadata of Datasets that contain tables data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**GoogleCloudAiplatformV1SchemaTablesDatasetMetadataInputConfig**](GoogleCloudAiplatformV1SchemaTablesDatasetMetadataInputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_tables_dataset_metadata import GoogleCloudAiplatformV1SchemaTablesDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTablesDatasetMetadata from a JSON string
google_cloud_aiplatform_v1_schema_tables_dataset_metadata_instance = GoogleCloudAiplatformV1SchemaTablesDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTablesDatasetMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_tables_dataset_metadata_dict = google_cloud_aiplatform_v1_schema_tables_dataset_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTablesDatasetMetadata from a dict
google_cloud_aiplatform_v1_schema_tables_dataset_metadata_from_dict = GoogleCloudAiplatformV1SchemaTablesDatasetMetadata.from_dict(google_cloud_aiplatform_v1_schema_tables_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


