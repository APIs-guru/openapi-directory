# VerifyAssertionResponse

Response of verifying the IDP assertion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action code. | [optional] 
**app_installation_url** | **str** | URL for OTA app installation. | [optional] 
**app_scheme** | **str** | The custom scheme used by mobile app. | [optional] 
**context** | **str** | The opaque value used by the client to maintain context info between the authentication request and the IDP callback. | [optional] 
**date_of_birth** | **str** | The birth date of the IdP account. | [optional] 
**display_name** | **str** | The display name of the user. | [optional] 
**email** | **str** | The email returned by the IdP. NOTE: The federated login user may not own the email. | [optional] 
**email_recycled** | **bool** | It&#39;s true if the email is recycled. | [optional] 
**email_verified** | **bool** | The value is true if the IDP is also the email provider. It means the user owns the email. | [optional] 
**error_message** | **str** | Client error code. | [optional] 
**expires_in** | **str** | If idToken is STS id token, then this field will be expiration time of STS id token in seconds. | [optional] 
**federated_id** | **str** | The unique ID identifies the IdP account. | [optional] 
**first_name** | **str** | The first name of the user. | [optional] 
**full_name** | **str** | The full name of the user. | [optional] 
**id_token** | **str** | The ID token. | [optional] 
**input_email** | **str** | It&#39;s the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email. | [optional] 
**is_new_user** | **bool** | True if it&#39;s a new user sign-in, false if it&#39;s a returning user. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#VerifyAssertionResponse\&quot;. | [optional] [default to 'identitytoolkit#VerifyAssertionResponse']
**language** | **str** | The language preference of the user. | [optional] 
**last_name** | **str** | The last name of the user. | [optional] 
**local_id** | **str** | The RP local ID if it&#39;s already been mapped to the IdP account identified by the federated ID. | [optional] 
**need_confirmation** | **bool** | Whether the assertion is from a non-trusted IDP and need account linking confirmation. | [optional] 
**need_email** | **bool** | Whether need client to supply email to complete the federated login flow. | [optional] 
**nick_name** | **str** | The nick name of the user. | [optional] 
**oauth_access_token** | **str** | The OAuth2 access token. | [optional] 
**oauth_authorization_code** | **str** | The OAuth2 authorization code. | [optional] 
**oauth_expire_in** | **int** | The lifetime in seconds of the OAuth2 access token. | [optional] 
**oauth_id_token** | **str** | The OIDC id token. | [optional] 
**oauth_request_token** | **str** | The user approved request token for the OpenID OAuth extension. | [optional] 
**oauth_scope** | **str** | The scope for the OpenID OAuth extension. | [optional] 
**oauth_token_secret** | **str** | The OAuth1 access token secret. | [optional] 
**original_email** | **str** | The original email stored in the mapping storage. It&#39;s returned when the federated ID is associated to a different email. | [optional] 
**photo_url** | **str** | The URI of the public accessible profiel picture. | [optional] 
**provider_id** | **str** | The IdP ID. For white listed IdPs it&#39;s a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the \&quot;providerId\&quot; param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the \&quot;identifier\&quot; param is federated ID in the createAuthUri request. The domain part of the federated ID is returned. | [optional] 
**raw_user_info** | **str** | Raw IDP-returned user info. | [optional] 
**refresh_token** | **str** | If idToken is STS id token, then this field will be refresh token. | [optional] 
**screen_name** | **str** | The screen_name of a Twitter user or the login name at Github. | [optional] 
**time_zone** | **str** | The timezone of the user. | [optional] 
**verified_provider** | **List[str]** | When action is &#39;map&#39;, contains the idps which can be used for confirmation. | [optional] 

## Example

```python
from openapi_client.models.verify_assertion_response import VerifyAssertionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyAssertionResponse from a JSON string
verify_assertion_response_instance = VerifyAssertionResponse.from_json(json)
# print the JSON string representation of the object
print(VerifyAssertionResponse.to_json())

# convert the object into a dict
verify_assertion_response_dict = verify_assertion_response_instance.to_dict()
# create an instance of VerifyAssertionResponse from a dict
verify_assertion_response_from_dict = VerifyAssertionResponse.from_dict(verify_assertion_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


