# GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataInputConfig

The time series Dataset's data source. The Dataset doesn't store the data directly, but only pointer(s) to its data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_source** | [**GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataBigQuerySource**](GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataBigQuerySource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataGcsSource**](GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_time_series_dataset_metadata_input_config import GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataInputConfig from a JSON string
google_cloud_aiplatform_v1_schema_time_series_dataset_metadata_input_config_instance = GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataInputConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_time_series_dataset_metadata_input_config_dict = google_cloud_aiplatform_v1_schema_time_series_dataset_metadata_input_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataInputConfig from a dict
google_cloud_aiplatform_v1_schema_time_series_dataset_metadata_input_config_from_dict = GoogleCloudAiplatformV1SchemaTimeSeriesDatasetMetadataInputConfig.from_dict(google_cloud_aiplatform_v1_schema_time_series_dataset_metadata_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


