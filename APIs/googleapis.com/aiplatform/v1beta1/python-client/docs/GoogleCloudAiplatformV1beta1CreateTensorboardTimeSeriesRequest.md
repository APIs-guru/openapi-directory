# GoogleCloudAiplatformV1beta1CreateTensorboardTimeSeriesRequest

Request message for TensorboardService.CreateTensorboardTimeSeries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. The resource name of the TensorboardRun to create the TensorboardTimeSeries in. Format: &#x60;projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}&#x60; | [optional] 
**tensorboard_time_series** | [**GoogleCloudAiplatformV1beta1TensorboardTimeSeries**](GoogleCloudAiplatformV1beta1TensorboardTimeSeries.md) |  | [optional] 
**tensorboard_time_series_id** | **str** | Optional. The user specified unique ID to use for the TensorboardTimeSeries, which becomes the final component of the TensorboardTimeSeries&#39;s resource name. This value should match \&quot;a-z0-9{0, 127}\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_create_tensorboard_time_series_request import GoogleCloudAiplatformV1beta1CreateTensorboardTimeSeriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1CreateTensorboardTimeSeriesRequest from a JSON string
google_cloud_aiplatform_v1beta1_create_tensorboard_time_series_request_instance = GoogleCloudAiplatformV1beta1CreateTensorboardTimeSeriesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1CreateTensorboardTimeSeriesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_create_tensorboard_time_series_request_dict = google_cloud_aiplatform_v1beta1_create_tensorboard_time_series_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1CreateTensorboardTimeSeriesRequest from a dict
google_cloud_aiplatform_v1beta1_create_tensorboard_time_series_request_from_dict = GoogleCloudAiplatformV1beta1CreateTensorboardTimeSeriesRequest.from_dict(google_cloud_aiplatform_v1beta1_create_tensorboard_time_series_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


