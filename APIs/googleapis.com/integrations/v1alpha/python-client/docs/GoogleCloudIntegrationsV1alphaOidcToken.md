# GoogleCloudIntegrationsV1alphaOidcToken

OIDC Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. | [optional] 
**service_account_email** | **str** | The service account email to be used as the identity for the token. | [optional] 
**token** | **str** | ID token obtained for the service account | [optional] 
**token_expire_time** | **str** | The approximate time until the token retrieved is valid. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_oidc_token import GoogleCloudIntegrationsV1alphaOidcToken

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaOidcToken from a JSON string
google_cloud_integrations_v1alpha_oidc_token_instance = GoogleCloudIntegrationsV1alphaOidcToken.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaOidcToken.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_oidc_token_dict = google_cloud_integrations_v1alpha_oidc_token_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaOidcToken from a dict
google_cloud_integrations_v1alpha_oidc_token_from_dict = GoogleCloudIntegrationsV1alphaOidcToken.from_dict(google_cloud_integrations_v1alpha_oidc_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


