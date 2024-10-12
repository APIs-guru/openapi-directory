# GoogleCloudAiplatformV1beta1TensorboardBlobSequence

One point viewable on a blob metric plot, but mostly just a wrapper message to work around repeated fields can't be used directly within `oneof` fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[GoogleCloudAiplatformV1beta1TensorboardBlob]**](GoogleCloudAiplatformV1beta1TensorboardBlob.md) | List of blobs contained within the sequence. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_tensorboard_blob_sequence import GoogleCloudAiplatformV1beta1TensorboardBlobSequence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TensorboardBlobSequence from a JSON string
google_cloud_aiplatform_v1beta1_tensorboard_blob_sequence_instance = GoogleCloudAiplatformV1beta1TensorboardBlobSequence.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TensorboardBlobSequence.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_tensorboard_blob_sequence_dict = google_cloud_aiplatform_v1beta1_tensorboard_blob_sequence_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TensorboardBlobSequence from a dict
google_cloud_aiplatform_v1beta1_tensorboard_blob_sequence_from_dict = GoogleCloudAiplatformV1beta1TensorboardBlobSequence.from_dict(google_cloud_aiplatform_v1beta1_tensorboard_blob_sequence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


