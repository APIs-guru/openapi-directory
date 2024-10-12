# GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataInputConfig

The tables Dataset's data source. The Dataset doesn't store the data directly, but only pointer(s) to its data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_source** | [**GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataBigQuerySource**](GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataBigQuerySource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataGcsSource**](GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_tables_dataset_metadata_input_config import GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataInputConfig from a JSON string
google_cloud_aiplatform_v1beta1_schema_tables_dataset_metadata_input_config_instance = GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataInputConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_tables_dataset_metadata_input_config_dict = google_cloud_aiplatform_v1beta1_schema_tables_dataset_metadata_input_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataInputConfig from a dict
google_cloud_aiplatform_v1beta1_schema_tables_dataset_metadata_input_config_from_dict = GoogleCloudAiplatformV1beta1SchemaTablesDatasetMetadataInputConfig.from_dict(google_cloud_aiplatform_v1beta1_schema_tables_dataset_metadata_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


