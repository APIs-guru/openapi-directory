# GoogleCloudAiplatformV1DeployedIndexAuthConfig

Used to set up the auth on the DeployedIndex's private endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_provider** | [**GoogleCloudAiplatformV1DeployedIndexAuthConfigAuthProvider**](GoogleCloudAiplatformV1DeployedIndexAuthConfigAuthProvider.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_deployed_index_auth_config import GoogleCloudAiplatformV1DeployedIndexAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DeployedIndexAuthConfig from a JSON string
google_cloud_aiplatform_v1_deployed_index_auth_config_instance = GoogleCloudAiplatformV1DeployedIndexAuthConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DeployedIndexAuthConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_deployed_index_auth_config_dict = google_cloud_aiplatform_v1_deployed_index_auth_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DeployedIndexAuthConfig from a dict
google_cloud_aiplatform_v1_deployed_index_auth_config_from_dict = GoogleCloudAiplatformV1DeployedIndexAuthConfig.from_dict(google_cloud_aiplatform_v1_deployed_index_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


