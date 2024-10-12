# GoogleCloudAiplatformV1ListTensorboardsResponse

Response message for TensorboardService.ListTensorboards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as ListTensorboardsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**tensorboards** | [**List[GoogleCloudAiplatformV1Tensorboard]**](GoogleCloudAiplatformV1Tensorboard.md) | The Tensorboards mathching the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_tensorboards_response import GoogleCloudAiplatformV1ListTensorboardsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListTensorboardsResponse from a JSON string
google_cloud_aiplatform_v1_list_tensorboards_response_instance = GoogleCloudAiplatformV1ListTensorboardsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListTensorboardsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_tensorboards_response_dict = google_cloud_aiplatform_v1_list_tensorboards_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListTensorboardsResponse from a dict
google_cloud_aiplatform_v1_list_tensorboards_response_from_dict = GoogleCloudAiplatformV1ListTensorboardsResponse.from_dict(google_cloud_aiplatform_v1_list_tensorboards_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


