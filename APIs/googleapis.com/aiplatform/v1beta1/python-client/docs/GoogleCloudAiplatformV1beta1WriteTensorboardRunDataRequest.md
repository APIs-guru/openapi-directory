# GoogleCloudAiplatformV1beta1WriteTensorboardRunDataRequest

Request message for TensorboardService.WriteTensorboardRunData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tensorboard_run** | **str** | Required. The resource name of the TensorboardRun to write data to. Format: &#x60;projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}&#x60; | [optional] 
**time_series_data** | [**List[GoogleCloudAiplatformV1beta1TimeSeriesData]**](GoogleCloudAiplatformV1beta1TimeSeriesData.md) | Required. The TensorboardTimeSeries data to write. Values with in a time series are indexed by their step value. Repeated writes to the same step will overwrite the existing value for that step. The upper limit of data points per write request is 5000. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_write_tensorboard_run_data_request import GoogleCloudAiplatformV1beta1WriteTensorboardRunDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1WriteTensorboardRunDataRequest from a JSON string
google_cloud_aiplatform_v1beta1_write_tensorboard_run_data_request_instance = GoogleCloudAiplatformV1beta1WriteTensorboardRunDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1WriteTensorboardRunDataRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_write_tensorboard_run_data_request_dict = google_cloud_aiplatform_v1beta1_write_tensorboard_run_data_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1WriteTensorboardRunDataRequest from a dict
google_cloud_aiplatform_v1beta1_write_tensorboard_run_data_request_from_dict = GoogleCloudAiplatformV1beta1WriteTensorboardRunDataRequest.from_dict(google_cloud_aiplatform_v1beta1_write_tensorboard_run_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


