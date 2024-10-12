# GoogleIamAdminV1WorkforcePoolProviderOidc

Represents an OpenId Connect 1.0 identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Required. The client ID. Must match the audience claim of the JWT issued by the identity provider. | [optional] 
**client_secret** | [**GoogleIamAdminV1WorkforcePoolProviderOidcClientSecret**](GoogleIamAdminV1WorkforcePoolProviderOidcClientSecret.md) |  | [optional] 
**issuer_uri** | **str** | Required. The OIDC issuer URI. Must be a valid URI using the &#39;https&#39; scheme. | [optional] 
**jwks_json** | **str** | OIDC JWKs in JSON String format. For details on the definition of a JWK, see https://tools.ietf.org/html/rfc7517. If not set, the &#x60;jwks_uri&#x60; from the discovery document(fetched from the .well-known path of the &#x60;issuer_uri&#x60;) will be used. Currently, RSA and EC asymmetric keys are supported. The JWK must use following format and include only the following fields: { \&quot;keys\&quot;: [ { \&quot;kty\&quot;: \&quot;RSA/EC\&quot;, \&quot;alg\&quot;: \&quot;\&quot;, \&quot;use\&quot;: \&quot;sig\&quot;, \&quot;kid\&quot;: \&quot;\&quot;, \&quot;n\&quot;: \&quot;\&quot;, \&quot;e\&quot;: \&quot;\&quot;, \&quot;x\&quot;: \&quot;\&quot;, \&quot;y\&quot;: \&quot;\&quot;, \&quot;crv\&quot;: \&quot;\&quot; } ] } | [optional] 
**web_sso_config** | [**GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig**](GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_iam_admin_v1_workforce_pool_provider_oidc import GoogleIamAdminV1WorkforcePoolProviderOidc

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamAdminV1WorkforcePoolProviderOidc from a JSON string
google_iam_admin_v1_workforce_pool_provider_oidc_instance = GoogleIamAdminV1WorkforcePoolProviderOidc.from_json(json)
# print the JSON string representation of the object
print(GoogleIamAdminV1WorkforcePoolProviderOidc.to_json())

# convert the object into a dict
google_iam_admin_v1_workforce_pool_provider_oidc_dict = google_iam_admin_v1_workforce_pool_provider_oidc_instance.to_dict()
# create an instance of GoogleIamAdminV1WorkforcePoolProviderOidc from a dict
google_iam_admin_v1_workforce_pool_provider_oidc_from_dict = GoogleIamAdminV1WorkforcePoolProviderOidc.from_dict(google_iam_admin_v1_workforce_pool_provider_oidc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


