# IdentitytoolkitRelyingpartyCreateAuthUriRequest

Request to get the IDP authentication URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS. | [optional] 
**auth_flow_type** | **str** | Explicitly specify the auth flow type. Currently only support \&quot;CODE_FLOW\&quot; type. The field is only used for Google provider. | [optional] 
**client_id** | **str** | The relying party OAuth client ID. | [optional] 
**context** | **str** | The opaque value used by the client to maintain context info between the authentication request and the IDP callback. | [optional] 
**continue_uri** | **str** | The URI to which the IDP redirects the user after the federated login flow. | [optional] 
**custom_parameter** | **Dict[str, str]** | The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token. | [optional] 
**hosted_domain** | **str** | The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts. | [optional] 
**identifier** | **str** | The email or federated ID of the user. | [optional] 
**oauth_consumer_key** | **str** | The developer&#39;s consumer key for OpenId OAuth Extension | [optional] 
**oauth_scope** | **str** | Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant | [optional] 
**openid_realm** | **str** | Optional realm for OpenID protocol. The sub string \&quot;scheme://domain:port\&quot; of the param \&quot;continueUri\&quot; is used if this is not set. | [optional] 
**ota_app** | **str** | The native app package for OTA installation. | [optional] 
**provider_id** | **str** | The IdP ID. For white listed IdPs it&#39;s a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it&#39;s the OP identifier. | [optional] 
**session_id** | **str** | The session_id passed by client. | [optional] 
**tenant_id** | **str** | For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. | [optional] 
**tenant_project_number** | **str** | Tenant project number to be used for idp discovery. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_create_auth_uri_request import IdentitytoolkitRelyingpartyCreateAuthUriRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyCreateAuthUriRequest from a JSON string
identitytoolkit_relyingparty_create_auth_uri_request_instance = IdentitytoolkitRelyingpartyCreateAuthUriRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyCreateAuthUriRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_create_auth_uri_request_dict = identitytoolkit_relyingparty_create_auth_uri_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyCreateAuthUriRequest from a dict
identitytoolkit_relyingparty_create_auth_uri_request_from_dict = IdentitytoolkitRelyingpartyCreateAuthUriRequest.from_dict(identitytoolkit_relyingparty_create_auth_uri_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


