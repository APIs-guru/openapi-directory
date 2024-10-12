# GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadataGcsSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **List[str]** | Cloud Storage URI of one or more files. Only CSV files are supported. The first line of the CSV file is used as the header. If there are multiple files, the header is the first line of the lexicographically first file, the other files must either contain the exact same header or omit the header. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_gcs_source import GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadataGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadataGcsSource from a JSON string
google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_gcs_source_instance = GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadataGcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadataGcsSource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_gcs_source_dict = google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_gcs_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadataGcsSource from a dict
google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_gcs_source_from_dict = GoogleCloudAiplatformV1beta1SchemaTimeSeriesDatasetMetadataGcsSource.from_dict(google_cloud_aiplatform_v1beta1_schema_time_series_dataset_metadata_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


