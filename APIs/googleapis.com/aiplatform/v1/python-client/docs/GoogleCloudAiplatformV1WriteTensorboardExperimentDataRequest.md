# GoogleCloudAiplatformV1WriteTensorboardExperimentDataRequest

Request message for TensorboardService.WriteTensorboardExperimentData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**write_run_data_requests** | [**List[GoogleCloudAiplatformV1WriteTensorboardRunDataRequest]**](GoogleCloudAiplatformV1WriteTensorboardRunDataRequest.md) | Required. Requests containing per-run TensorboardTimeSeries data to write. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_write_tensorboard_experiment_data_request import GoogleCloudAiplatformV1WriteTensorboardExperimentDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1WriteTensorboardExperimentDataRequest from a JSON string
google_cloud_aiplatform_v1_write_tensorboard_experiment_data_request_instance = GoogleCloudAiplatformV1WriteTensorboardExperimentDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1WriteTensorboardExperimentDataRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_write_tensorboard_experiment_data_request_dict = google_cloud_aiplatform_v1_write_tensorboard_experiment_data_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1WriteTensorboardExperimentDataRequest from a dict
google_cloud_aiplatform_v1_write_tensorboard_experiment_data_request_from_dict = GoogleCloudAiplatformV1WriteTensorboardExperimentDataRequest.from_dict(google_cloud_aiplatform_v1_write_tensorboard_experiment_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


