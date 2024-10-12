# GoogleCloudAiplatformV1BatchCreateTensorboardRunsRequest

Request message for TensorboardService.BatchCreateTensorboardRuns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleCloudAiplatformV1CreateTensorboardRunRequest]**](GoogleCloudAiplatformV1CreateTensorboardRunRequest.md) | Required. The request message specifying the TensorboardRuns to create. A maximum of 1000 TensorboardRuns can be created in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_create_tensorboard_runs_request import GoogleCloudAiplatformV1BatchCreateTensorboardRunsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchCreateTensorboardRunsRequest from a JSON string
google_cloud_aiplatform_v1_batch_create_tensorboard_runs_request_instance = GoogleCloudAiplatformV1BatchCreateTensorboardRunsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchCreateTensorboardRunsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_create_tensorboard_runs_request_dict = google_cloud_aiplatform_v1_batch_create_tensorboard_runs_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchCreateTensorboardRunsRequest from a dict
google_cloud_aiplatform_v1_batch_create_tensorboard_runs_request_from_dict = GoogleCloudAiplatformV1BatchCreateTensorboardRunsRequest.from_dict(google_cloud_aiplatform_v1_batch_create_tensorboard_runs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


