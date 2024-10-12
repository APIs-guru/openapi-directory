# GoogleCloudAiplatformV1beta1BatchCreateTensorboardTimeSeriesRequest

Request message for TensorboardService.BatchCreateTensorboardTimeSeries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleCloudAiplatformV1beta1CreateTensorboardTimeSeriesRequest]**](GoogleCloudAiplatformV1beta1CreateTensorboardTimeSeriesRequest.md) | Required. The request message specifying the TensorboardTimeSeries to create. A maximum of 1000 TensorboardTimeSeries can be created in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_create_tensorboard_time_series_request import GoogleCloudAiplatformV1beta1BatchCreateTensorboardTimeSeriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchCreateTensorboardTimeSeriesRequest from a JSON string
google_cloud_aiplatform_v1beta1_batch_create_tensorboard_time_series_request_instance = GoogleCloudAiplatformV1beta1BatchCreateTensorboardTimeSeriesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchCreateTensorboardTimeSeriesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_create_tensorboard_time_series_request_dict = google_cloud_aiplatform_v1beta1_batch_create_tensorboard_time_series_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchCreateTensorboardTimeSeriesRequest from a dict
google_cloud_aiplatform_v1beta1_batch_create_tensorboard_time_series_request_from_dict = GoogleCloudAiplatformV1beta1BatchCreateTensorboardTimeSeriesRequest.from_dict(google_cloud_aiplatform_v1beta1_batch_create_tensorboard_time_series_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


