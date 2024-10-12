# GoogleCloudAiplatformV1ReadTensorboardTimeSeriesDataResponse

Response message for TensorboardService.ReadTensorboardTimeSeriesData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_series_data** | [**GoogleCloudAiplatformV1TimeSeriesData**](GoogleCloudAiplatformV1TimeSeriesData.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_read_tensorboard_time_series_data_response import GoogleCloudAiplatformV1ReadTensorboardTimeSeriesDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ReadTensorboardTimeSeriesDataResponse from a JSON string
google_cloud_aiplatform_v1_read_tensorboard_time_series_data_response_instance = GoogleCloudAiplatformV1ReadTensorboardTimeSeriesDataResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ReadTensorboardTimeSeriesDataResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_read_tensorboard_time_series_data_response_dict = google_cloud_aiplatform_v1_read_tensorboard_time_series_data_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ReadTensorboardTimeSeriesDataResponse from a dict
google_cloud_aiplatform_v1_read_tensorboard_time_series_data_response_from_dict = GoogleCloudAiplatformV1ReadTensorboardTimeSeriesDataResponse.from_dict(google_cloud_aiplatform_v1_read_tensorboard_time_series_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


