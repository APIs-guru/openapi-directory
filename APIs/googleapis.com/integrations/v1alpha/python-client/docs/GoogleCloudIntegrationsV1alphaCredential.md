# GoogleCloudIntegrationsV1alphaCredential

Defines parameters for a single, canonical credential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | [**GoogleCloudIntegrationsV1alphaAuthToken**](GoogleCloudIntegrationsV1alphaAuthToken.md) |  | [optional] 
**credential_type** | **str** | Credential type associated with auth config. | [optional] 
**jwt** | [**GoogleCloudIntegrationsV1alphaJwt**](GoogleCloudIntegrationsV1alphaJwt.md) |  | [optional] 
**oauth2_authorization_code** | [**GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode**](GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.md) |  | [optional] 
**oauth2_client_credentials** | [**GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials**](GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials.md) |  | [optional] 
**oauth2_resource_owner_credentials** | [**GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials**](GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.md) |  | [optional] 
**oidc_token** | [**GoogleCloudIntegrationsV1alphaOidcToken**](GoogleCloudIntegrationsV1alphaOidcToken.md) |  | [optional] 
**service_account_credentials** | [**GoogleCloudIntegrationsV1alphaServiceAccountCredentials**](GoogleCloudIntegrationsV1alphaServiceAccountCredentials.md) |  | [optional] 
**username_and_password** | [**GoogleCloudIntegrationsV1alphaUsernameAndPassword**](GoogleCloudIntegrationsV1alphaUsernameAndPassword.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_credential import GoogleCloudIntegrationsV1alphaCredential

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaCredential from a JSON string
google_cloud_integrations_v1alpha_credential_instance = GoogleCloudIntegrationsV1alphaCredential.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaCredential.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_credential_dict = google_cloud_integrations_v1alpha_credential_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaCredential from a dict
google_cloud_integrations_v1alpha_credential_from_dict = GoogleCloudIntegrationsV1alphaCredential.from_dict(google_cloud_integrations_v1alpha_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


