# GoogleCloudAiplatformV1beta1UploadModelRequest

Request message for ModelService.UploadModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | [**GoogleCloudAiplatformV1beta1Model**](GoogleCloudAiplatformV1beta1Model.md) |  | [optional] 
**model_id** | **str** | Optional. The ID to use for the uploaded Model, which will become the final component of the model resource name. This value may be up to 63 characters, and valid characters are &#x60;[a-z0-9_-]&#x60;. The first character cannot be a number or hyphen. | [optional] 
**parent_model** | **str** | Optional. The resource name of the model into which to upload the version. Only specify this field when uploading a new version. | [optional] 
**service_account** | **str** | Optional. The user-provided custom service account to use to do the model upload. If empty, [Vertex AI Service Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) will be used to access resources needed to upload the model. This account must belong to the target project where the model is uploaded to, i.e., the project specified in the &#x60;parent&#x60; field of this request and have necessary read permissions (to Google Cloud Storage, Artifact Registry, etc.). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_upload_model_request import GoogleCloudAiplatformV1beta1UploadModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1UploadModelRequest from a JSON string
google_cloud_aiplatform_v1beta1_upload_model_request_instance = GoogleCloudAiplatformV1beta1UploadModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1UploadModelRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_upload_model_request_dict = google_cloud_aiplatform_v1beta1_upload_model_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1UploadModelRequest from a dict
google_cloud_aiplatform_v1beta1_upload_model_request_from_dict = GoogleCloudAiplatformV1beta1UploadModelRequest.from_dict(google_cloud_aiplatform_v1beta1_upload_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


