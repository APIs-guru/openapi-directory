# GoogleCloudAiplatformV1beta1ListTensorboardRunsResponse

Response message for TensorboardService.ListTensorboardRuns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as ListTensorboardRunsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**tensorboard_runs** | [**List[GoogleCloudAiplatformV1beta1TensorboardRun]**](GoogleCloudAiplatformV1beta1TensorboardRun.md) | The TensorboardRuns mathching the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_tensorboard_runs_response import GoogleCloudAiplatformV1beta1ListTensorboardRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListTensorboardRunsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_tensorboard_runs_response_instance = GoogleCloudAiplatformV1beta1ListTensorboardRunsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListTensorboardRunsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_tensorboard_runs_response_dict = google_cloud_aiplatform_v1beta1_list_tensorboard_runs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListTensorboardRunsResponse from a dict
google_cloud_aiplatform_v1beta1_list_tensorboard_runs_response_from_dict = GoogleCloudAiplatformV1beta1ListTensorboardRunsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_tensorboard_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


