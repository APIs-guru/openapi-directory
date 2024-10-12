# GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadata

The metadata of Datasets that contain time series data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadataInputConfig**](GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadataInputConfig.md) |  | [optional] 
**time_column** | **str** | The column name of the time column that identifies time order in the time series. | [optional] 
**time_series_identifier_column** | **str** | The column name of the time series identifier column that identifies the time series. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata import GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadata from a JSON string
google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_instance = GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_dict = google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadata from a dict
google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_from_dict = GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadata.from_dict(google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


