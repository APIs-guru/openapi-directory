# GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataResponse

Response message for TensorboardService.ExportTensorboardTimeSeriesData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**time_series_data_points** | [**List[GoogleCloudAiplatformV1TimeSeriesDataPoint]**](GoogleCloudAiplatformV1TimeSeriesDataPoint.md) | The returned time series data points. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_export_tensorboard_time_series_data_response import GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataResponse from a JSON string
google_cloud_aiplatform_v1_export_tensorboard_time_series_data_response_instance = GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_export_tensorboard_time_series_data_response_dict = google_cloud_aiplatform_v1_export_tensorboard_time_series_data_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataResponse from a dict
google_cloud_aiplatform_v1_export_tensorboard_time_series_data_response_from_dict = GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataResponse.from_dict(google_cloud_aiplatform_v1_export_tensorboard_time_series_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


