# GoogleCloudAiplatformV1beta1CreateTensorboardRunRequest

Request message for TensorboardService.CreateTensorboardRun.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. The resource name of the TensorboardExperiment to create the TensorboardRun in. Format: &#x60;projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}&#x60; | [optional] 
**tensorboard_run** | [**GoogleCloudAiplatformV1beta1TensorboardRun**](GoogleCloudAiplatformV1beta1TensorboardRun.md) |  | [optional] 
**tensorboard_run_id** | **str** | Required. The ID to use for the Tensorboard run, which becomes the final component of the Tensorboard run&#39;s resource name. This value should be 1-128 characters, and valid characters are &#x60;/a-z-/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_create_tensorboard_run_request import GoogleCloudAiplatformV1beta1CreateTensorboardRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1CreateTensorboardRunRequest from a JSON string
google_cloud_aiplatform_v1beta1_create_tensorboard_run_request_instance = GoogleCloudAiplatformV1beta1CreateTensorboardRunRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1CreateTensorboardRunRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_create_tensorboard_run_request_dict = google_cloud_aiplatform_v1beta1_create_tensorboard_run_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1CreateTensorboardRunRequest from a dict
google_cloud_aiplatform_v1beta1_create_tensorboard_run_request_from_dict = GoogleCloudAiplatformV1beta1CreateTensorboardRunRequest.from_dict(google_cloud_aiplatform_v1beta1_create_tensorboard_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


