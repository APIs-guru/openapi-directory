# GoogleCloudAiplatformV1beta1GenerateAccessTokenRequest

Request message for NotebookInternalService.GenerateAccessToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_token** | **str** | Required. The VM identity token (a JWT) for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_generate_access_token_request import GoogleCloudAiplatformV1beta1GenerateAccessTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GenerateAccessTokenRequest from a JSON string
google_cloud_aiplatform_v1beta1_generate_access_token_request_instance = GoogleCloudAiplatformV1beta1GenerateAccessTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GenerateAccessTokenRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_generate_access_token_request_dict = google_cloud_aiplatform_v1beta1_generate_access_token_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GenerateAccessTokenRequest from a dict
google_cloud_aiplatform_v1beta1_generate_access_token_request_from_dict = GoogleCloudAiplatformV1beta1GenerateAccessTokenRequest.from_dict(google_cloud_aiplatform_v1beta1_generate_access_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


