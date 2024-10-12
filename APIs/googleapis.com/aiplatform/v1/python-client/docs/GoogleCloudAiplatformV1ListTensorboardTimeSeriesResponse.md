# GoogleCloudAiplatformV1ListTensorboardTimeSeriesResponse

Response message for TensorboardService.ListTensorboardTimeSeries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as ListTensorboardTimeSeriesRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**tensorboard_time_series** | [**List[GoogleCloudAiplatformV1TensorboardTimeSeries]**](GoogleCloudAiplatformV1TensorboardTimeSeries.md) | The TensorboardTimeSeries mathching the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_tensorboard_time_series_response import GoogleCloudAiplatformV1ListTensorboardTimeSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListTensorboardTimeSeriesResponse from a JSON string
google_cloud_aiplatform_v1_list_tensorboard_time_series_response_instance = GoogleCloudAiplatformV1ListTensorboardTimeSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListTensorboardTimeSeriesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_tensorboard_time_series_response_dict = google_cloud_aiplatform_v1_list_tensorboard_time_series_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListTensorboardTimeSeriesResponse from a dict
google_cloud_aiplatform_v1_list_tensorboard_time_series_response_from_dict = GoogleCloudAiplatformV1ListTensorboardTimeSeriesResponse.from_dict(google_cloud_aiplatform_v1_list_tensorboard_time_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


