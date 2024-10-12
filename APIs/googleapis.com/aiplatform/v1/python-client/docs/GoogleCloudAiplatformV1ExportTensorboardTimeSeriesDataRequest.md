# GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataRequest

Request message for TensorboardService.ExportTensorboardTimeSeriesData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Exports the TensorboardTimeSeries&#39; data that match the filter expression. | [optional] 
**order_by** | **str** | Field to use to sort the TensorboardTimeSeries&#39; data. By default, TensorboardTimeSeries&#39; data is returned in a pseudo random order. | [optional] 
**page_size** | **int** | The maximum number of data points to return per page. The default page_size is 1000. Values must be between 1 and 10000. Values above 10000 are coerced to 10000. | [optional] 
**page_token** | **str** | A page token, received from a previous ExportTensorboardTimeSeriesData call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ExportTensorboardTimeSeriesData must match the call that provided the page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_export_tensorboard_time_series_data_request import GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataRequest from a JSON string
google_cloud_aiplatform_v1_export_tensorboard_time_series_data_request_instance = GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_export_tensorboard_time_series_data_request_dict = google_cloud_aiplatform_v1_export_tensorboard_time_series_data_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataRequest from a dict
google_cloud_aiplatform_v1_export_tensorboard_time_series_data_request_from_dict = GoogleCloudAiplatformV1ExportTensorboardTimeSeriesDataRequest.from_dict(google_cloud_aiplatform_v1_export_tensorboard_time_series_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


