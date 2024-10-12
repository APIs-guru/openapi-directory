# GoogleCloudAiplatformV1beta1GenerateAccessTokenResponse

Response message for NotebookInternalService.GenerateToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Short-lived access token string which may be used to access Google APIs. | [optional] 
**expires_in** | **int** | The time in seconds when the access token expires. Typically that&#39;s 3600. | [optional] 
**scope** | **str** | Space-separated list of scopes contained in the returned token. https://cloud.google.com/docs/authentication/token-types#access-contents | [optional] 
**token_type** | **str** | Type of the returned access token (e.g. \&quot;Bearer\&quot;). It specifies how the token must be used. Bearer tokens may be used by any entity without proof of identity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_generate_access_token_response import GoogleCloudAiplatformV1beta1GenerateAccessTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GenerateAccessTokenResponse from a JSON string
google_cloud_aiplatform_v1beta1_generate_access_token_response_instance = GoogleCloudAiplatformV1beta1GenerateAccessTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GenerateAccessTokenResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_generate_access_token_response_dict = google_cloud_aiplatform_v1beta1_generate_access_token_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GenerateAccessTokenResponse from a dict
google_cloud_aiplatform_v1beta1_generate_access_token_response_from_dict = GoogleCloudAiplatformV1beta1GenerateAccessTokenResponse.from_dict(google_cloud_aiplatform_v1beta1_generate_access_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


