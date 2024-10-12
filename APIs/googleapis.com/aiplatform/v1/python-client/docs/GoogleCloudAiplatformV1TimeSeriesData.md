# GoogleCloudAiplatformV1TimeSeriesData

All the data stored in a TensorboardTimeSeries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tensorboard_time_series_id** | **str** | Required. The ID of the TensorboardTimeSeries, which will become the final component of the TensorboardTimeSeries&#39; resource name | [optional] 
**value_type** | **str** | Required. Immutable. The value type of this time series. All the values in this time series data must match this value type. | [optional] 
**values** | [**List[GoogleCloudAiplatformV1TimeSeriesDataPoint]**](GoogleCloudAiplatformV1TimeSeriesDataPoint.md) | Required. Data points in this time series. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_time_series_data import GoogleCloudAiplatformV1TimeSeriesData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1TimeSeriesData from a JSON string
google_cloud_aiplatform_v1_time_series_data_instance = GoogleCloudAiplatformV1TimeSeriesData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1TimeSeriesData.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_time_series_data_dict = google_cloud_aiplatform_v1_time_series_data_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1TimeSeriesData from a dict
google_cloud_aiplatform_v1_time_series_data_from_dict = GoogleCloudAiplatformV1TimeSeriesData.from_dict(google_cloud_aiplatform_v1_time_series_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


