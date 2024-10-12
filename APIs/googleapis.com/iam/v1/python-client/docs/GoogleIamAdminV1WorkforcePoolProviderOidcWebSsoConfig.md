# GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig

Configuration for web single sign-on for the OIDC provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_scopes** | **List[str]** | Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. By default, the &#x60;openid&#x60;, &#x60;profile&#x60; and &#x60;email&#x60; scopes that are supported by the identity provider are requested. Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured. | [optional] 
**assertion_claims_behavior** | **str** | Required. The behavior for how OIDC Claims are included in the &#x60;assertion&#x60; object used for attribute mapping and attribute condition. | [optional] 
**response_type** | **str** | Required. The Response Type to request for in the OIDC Authorization Request for web sign-in. The &#x60;CODE&#x60; Response Type is recommended to avoid the Implicit Flow, for security reasons. | [optional] 

## Example

```python
from openapi_client.models.google_iam_admin_v1_workforce_pool_provider_oidc_web_sso_config import GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig from a JSON string
google_iam_admin_v1_workforce_pool_provider_oidc_web_sso_config_instance = GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig.to_json())

# convert the object into a dict
google_iam_admin_v1_workforce_pool_provider_oidc_web_sso_config_dict = google_iam_admin_v1_workforce_pool_provider_oidc_web_sso_config_instance.to_dict()
# create an instance of GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig from a dict
google_iam_admin_v1_workforce_pool_provider_oidc_web_sso_config_from_dict = GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig.from_dict(google_iam_admin_v1_workforce_pool_provider_oidc_web_sso_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


