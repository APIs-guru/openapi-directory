# GoogleCloudAiplatformV1beta1CopyModelRequest

Request message for ModelService.CopyModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_spec** | [**GoogleCloudAiplatformV1beta1EncryptionSpec**](GoogleCloudAiplatformV1beta1EncryptionSpec.md) |  | [optional] 
**model_id** | **str** | Optional. Copy source_model into a new Model with this ID. The ID will become the final component of the model resource name. This value may be up to 63 characters, and valid characters are &#x60;[a-z0-9_-]&#x60;. The first character cannot be a number or hyphen. | [optional] 
**parent_model** | **str** | Optional. Specify this field to copy source_model into this existing Model as a new version. Format: &#x60;projects/{project}/locations/{location}/models/{model}&#x60; | [optional] 
**source_model** | **str** | Required. The resource name of the Model to copy. That Model must be in the same Project. Format: &#x60;projects/{project}/locations/{location}/models/{model}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_copy_model_request import GoogleCloudAiplatformV1beta1CopyModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1CopyModelRequest from a JSON string
google_cloud_aiplatform_v1beta1_copy_model_request_instance = GoogleCloudAiplatformV1beta1CopyModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1CopyModelRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_copy_model_request_dict = google_cloud_aiplatform_v1beta1_copy_model_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1CopyModelRequest from a dict
google_cloud_aiplatform_v1beta1_copy_model_request_from_dict = GoogleCloudAiplatformV1beta1CopyModelRequest.from_dict(google_cloud_aiplatform_v1beta1_copy_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


