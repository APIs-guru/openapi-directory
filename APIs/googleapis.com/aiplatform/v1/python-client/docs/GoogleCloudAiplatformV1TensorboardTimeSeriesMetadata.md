# GoogleCloudAiplatformV1TensorboardTimeSeriesMetadata

Describes metadata for a TensorboardTimeSeries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_blob_sequence_length** | **str** | Output only. The largest blob sequence length (number of blobs) of all data points in this time series, if its ValueType is BLOB_SEQUENCE. | [optional] [readonly] 
**max_step** | **str** | Output only. Max step index of all data points within a TensorboardTimeSeries. | [optional] [readonly] 
**max_wall_time** | **str** | Output only. Max wall clock timestamp of all data points within a TensorboardTimeSeries. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_tensorboard_time_series_metadata import GoogleCloudAiplatformV1TensorboardTimeSeriesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1TensorboardTimeSeriesMetadata from a JSON string
google_cloud_aiplatform_v1_tensorboard_time_series_metadata_instance = GoogleCloudAiplatformV1TensorboardTimeSeriesMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1TensorboardTimeSeriesMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_tensorboard_time_series_metadata_dict = google_cloud_aiplatform_v1_tensorboard_time_series_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1TensorboardTimeSeriesMetadata from a dict
google_cloud_aiplatform_v1_tensorboard_time_series_metadata_from_dict = GoogleCloudAiplatformV1TensorboardTimeSeriesMetadata.from_dict(google_cloud_aiplatform_v1_tensorboard_time_series_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


