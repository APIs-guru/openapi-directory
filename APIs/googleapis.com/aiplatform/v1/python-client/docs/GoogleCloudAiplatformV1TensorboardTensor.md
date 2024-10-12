# GoogleCloudAiplatformV1TensorboardTensor

One point viewable on a tensor metric plot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **bytearray** | Required. Serialized form of https://github.com/tensorflow/tensorflow/blob/master/tensorflow/core/framework/tensor.proto | [optional] 
**version_number** | **int** | Optional. Version number of TensorProto used to serialize value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_tensorboard_tensor import GoogleCloudAiplatformV1TensorboardTensor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1TensorboardTensor from a JSON string
google_cloud_aiplatform_v1_tensorboard_tensor_instance = GoogleCloudAiplatformV1TensorboardTensor.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1TensorboardTensor.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_tensorboard_tensor_dict = google_cloud_aiplatform_v1_tensorboard_tensor_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1TensorboardTensor from a dict
google_cloud_aiplatform_v1_tensorboard_tensor_from_dict = GoogleCloudAiplatformV1TensorboardTensor.from_dict(google_cloud_aiplatform_v1_tensorboard_tensor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


