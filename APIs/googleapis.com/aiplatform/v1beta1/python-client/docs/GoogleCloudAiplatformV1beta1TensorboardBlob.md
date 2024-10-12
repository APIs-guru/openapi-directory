# GoogleCloudAiplatformV1beta1TensorboardBlob

One blob (e.g, image, graph) viewable on a blob metric plot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | Optional. The bytes of the blob is not present unless it&#39;s returned by the ReadTensorboardBlobData endpoint. | [optional] 
**id** | **str** | Output only. A URI safe key uniquely identifying a blob. Can be used to locate the blob stored in the Cloud Storage bucket of the consumer project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_tensorboard_blob import GoogleCloudAiplatformV1beta1TensorboardBlob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TensorboardBlob from a JSON string
google_cloud_aiplatform_v1beta1_tensorboard_blob_instance = GoogleCloudAiplatformV1beta1TensorboardBlob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TensorboardBlob.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_tensorboard_blob_dict = google_cloud_aiplatform_v1beta1_tensorboard_blob_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TensorboardBlob from a dict
google_cloud_aiplatform_v1beta1_tensorboard_blob_from_dict = GoogleCloudAiplatformV1beta1TensorboardBlob.from_dict(google_cloud_aiplatform_v1beta1_tensorboard_blob_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


