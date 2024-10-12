# GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials

For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | [**GoogleCloudIntegrationsV1alphaAccessToken**](GoogleCloudIntegrationsV1alphaAccessToken.md) |  | [optional] 
**client_id** | **str** | The client&#39;s ID. | [optional] 
**client_secret** | **str** | The client&#39;s secret. | [optional] 
**request_type** | **str** | Represent how to pass parameters to fetch access token | [optional] 
**scope** | **str** | A space-delimited list of requested scope permissions. | [optional] 
**token_endpoint** | **str** | The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. | [optional] 
**token_params** | [**GoogleCloudIntegrationsV1alphaParameterMap**](GoogleCloudIntegrationsV1alphaParameterMap.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_o_auth2_client_credentials import GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials from a JSON string
google_cloud_integrations_v1alpha_o_auth2_client_credentials_instance = GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_o_auth2_client_credentials_dict = google_cloud_integrations_v1alpha_o_auth2_client_credentials_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials from a dict
google_cloud_integrations_v1alpha_o_auth2_client_credentials_from_dict = GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials.from_dict(google_cloud_integrations_v1alpha_o_auth2_client_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


