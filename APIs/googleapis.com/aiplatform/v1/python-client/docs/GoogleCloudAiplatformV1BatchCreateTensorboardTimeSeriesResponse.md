# GoogleCloudAiplatformV1BatchCreateTensorboardTimeSeriesResponse

Response message for TensorboardService.BatchCreateTensorboardTimeSeries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tensorboard_time_series** | [**List[GoogleCloudAiplatformV1TensorboardTimeSeries]**](GoogleCloudAiplatformV1TensorboardTimeSeries.md) | The created TensorboardTimeSeries. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_create_tensorboard_time_series_response import GoogleCloudAiplatformV1BatchCreateTensorboardTimeSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchCreateTensorboardTimeSeriesResponse from a JSON string
google_cloud_aiplatform_v1_batch_create_tensorboard_time_series_response_instance = GoogleCloudAiplatformV1BatchCreateTensorboardTimeSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchCreateTensorboardTimeSeriesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_create_tensorboard_time_series_response_dict = google_cloud_aiplatform_v1_batch_create_tensorboard_time_series_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchCreateTensorboardTimeSeriesResponse from a dict
google_cloud_aiplatform_v1_batch_create_tensorboard_time_series_response_from_dict = GoogleCloudAiplatformV1BatchCreateTensorboardTimeSeriesResponse.from_dict(google_cloud_aiplatform_v1_batch_create_tensorboard_time_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


