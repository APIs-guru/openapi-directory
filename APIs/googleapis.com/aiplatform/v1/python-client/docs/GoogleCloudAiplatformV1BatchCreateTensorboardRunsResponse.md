# GoogleCloudAiplatformV1BatchCreateTensorboardRunsResponse

Response message for TensorboardService.BatchCreateTensorboardRuns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tensorboard_runs** | [**List[GoogleCloudAiplatformV1TensorboardRun]**](GoogleCloudAiplatformV1TensorboardRun.md) | The created TensorboardRuns. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_create_tensorboard_runs_response import GoogleCloudAiplatformV1BatchCreateTensorboardRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchCreateTensorboardRunsResponse from a JSON string
google_cloud_aiplatform_v1_batch_create_tensorboard_runs_response_instance = GoogleCloudAiplatformV1BatchCreateTensorboardRunsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchCreateTensorboardRunsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_create_tensorboard_runs_response_dict = google_cloud_aiplatform_v1_batch_create_tensorboard_runs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchCreateTensorboardRunsResponse from a dict
google_cloud_aiplatform_v1_batch_create_tensorboard_runs_response_from_dict = GoogleCloudAiplatformV1BatchCreateTensorboardRunsResponse.from_dict(google_cloud_aiplatform_v1_batch_create_tensorboard_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


