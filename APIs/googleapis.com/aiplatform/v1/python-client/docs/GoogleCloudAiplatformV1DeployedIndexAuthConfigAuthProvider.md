# GoogleCloudAiplatformV1DeployedIndexAuthConfigAuthProvider

Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_issuers** | **List[str]** | A list of allowed JWT issuers. Each entry must be a valid Google service account, in the following format: &#x60;service-account-name@project-id.iam.gserviceaccount.com&#x60; | [optional] 
**audiences** | **List[str]** | The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_deployed_index_auth_config_auth_provider import GoogleCloudAiplatformV1DeployedIndexAuthConfigAuthProvider

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DeployedIndexAuthConfigAuthProvider from a JSON string
google_cloud_aiplatform_v1_deployed_index_auth_config_auth_provider_instance = GoogleCloudAiplatformV1DeployedIndexAuthConfigAuthProvider.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DeployedIndexAuthConfigAuthProvider.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_deployed_index_auth_config_auth_provider_dict = google_cloud_aiplatform_v1_deployed_index_auth_config_auth_provider_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DeployedIndexAuthConfigAuthProvider from a dict
google_cloud_aiplatform_v1_deployed_index_auth_config_auth_provider_from_dict = GoogleCloudAiplatformV1DeployedIndexAuthConfigAuthProvider.from_dict(google_cloud_aiplatform_v1_deployed_index_auth_config_auth_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


