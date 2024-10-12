# GoogleCloudAiplatformV1ReadTensorboardSizeResponse

Response message for TensorboardService.ReadTensorboardSize.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_size_byte** | **str** | Payload storage size for the TensorBoard | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_read_tensorboard_size_response import GoogleCloudAiplatformV1ReadTensorboardSizeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ReadTensorboardSizeResponse from a JSON string
google_cloud_aiplatform_v1_read_tensorboard_size_response_instance = GoogleCloudAiplatformV1ReadTensorboardSizeResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ReadTensorboardSizeResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_read_tensorboard_size_response_dict = google_cloud_aiplatform_v1_read_tensorboard_size_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ReadTensorboardSizeResponse from a dict
google_cloud_aiplatform_v1_read_tensorboard_size_response_from_dict = GoogleCloudAiplatformV1ReadTensorboardSizeResponse.from_dict(google_cloud_aiplatform_v1_read_tensorboard_size_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


