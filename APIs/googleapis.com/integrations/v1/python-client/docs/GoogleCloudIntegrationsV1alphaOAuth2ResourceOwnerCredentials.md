# GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials

For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | [**GoogleCloudIntegrationsV1alphaAccessToken**](GoogleCloudIntegrationsV1alphaAccessToken.md) |  | [optional] 
**client_id** | **str** | The client&#39;s ID. | [optional] 
**client_secret** | **str** | The client&#39;s secret. | [optional] 
**password** | **str** | The user&#39;s password. | [optional] 
**request_type** | **str** | Represent how to pass parameters to fetch access token | [optional] 
**scope** | **str** | A space-delimited list of requested scope permissions. | [optional] 
**token_endpoint** | **str** | The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. | [optional] 
**token_params** | [**GoogleCloudIntegrationsV1alphaParameterMap**](GoogleCloudIntegrationsV1alphaParameterMap.md) |  | [optional] 
**username** | **str** | The user&#39;s username. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_o_auth2_resource_owner_credentials import GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials from a JSON string
google_cloud_integrations_v1alpha_o_auth2_resource_owner_credentials_instance = GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_o_auth2_resource_owner_credentials_dict = google_cloud_integrations_v1alpha_o_auth2_resource_owner_credentials_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials from a dict
google_cloud_integrations_v1alpha_o_auth2_resource_owner_credentials_from_dict = GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.from_dict(google_cloud_integrations_v1alpha_o_auth2_resource_owner_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


