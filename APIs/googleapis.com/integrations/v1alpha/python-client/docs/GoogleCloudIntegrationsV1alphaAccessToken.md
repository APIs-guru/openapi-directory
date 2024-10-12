# GoogleCloudIntegrationsV1alphaAccessToken

The access token represents the authorization of a specific application to access specific parts of a user’s data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The access token encapsulating the security identity of a process or thread. | [optional] 
**access_token_expire_time** | **str** | Required. The approximate time until the access token retrieved is valid. | [optional] 
**refresh_token** | **str** | If the access token will expire, use the refresh token to obtain another access token. | [optional] 
**refresh_token_expire_time** | **str** | The approximate time until the refresh token retrieved is valid. | [optional] 
**token_type** | **str** | Only support \&quot;bearer\&quot; token in v1 as bearer token is the predominant type used with OAuth 2.0. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_access_token import GoogleCloudIntegrationsV1alphaAccessToken

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaAccessToken from a JSON string
google_cloud_integrations_v1alpha_access_token_instance = GoogleCloudIntegrationsV1alphaAccessToken.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaAccessToken.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_access_token_dict = google_cloud_integrations_v1alpha_access_token_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaAccessToken from a dict
google_cloud_integrations_v1alpha_access_token_from_dict = GoogleCloudIntegrationsV1alphaAccessToken.from_dict(google_cloud_integrations_v1alpha_access_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


