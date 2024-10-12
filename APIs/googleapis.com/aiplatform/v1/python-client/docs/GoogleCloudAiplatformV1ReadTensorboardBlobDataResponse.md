# GoogleCloudAiplatformV1ReadTensorboardBlobDataResponse

Response message for TensorboardService.ReadTensorboardBlobData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blobs** | [**List[GoogleCloudAiplatformV1TensorboardBlob]**](GoogleCloudAiplatformV1TensorboardBlob.md) | Blob messages containing blob bytes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_read_tensorboard_blob_data_response import GoogleCloudAiplatformV1ReadTensorboardBlobDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ReadTensorboardBlobDataResponse from a JSON string
google_cloud_aiplatform_v1_read_tensorboard_blob_data_response_instance = GoogleCloudAiplatformV1ReadTensorboardBlobDataResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ReadTensorboardBlobDataResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_read_tensorboard_blob_data_response_dict = google_cloud_aiplatform_v1_read_tensorboard_blob_data_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ReadTensorboardBlobDataResponse from a dict
google_cloud_aiplatform_v1_read_tensorboard_blob_data_response_from_dict = GoogleCloudAiplatformV1ReadTensorboardBlobDataResponse.from_dict(google_cloud_aiplatform_v1_read_tensorboard_blob_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


