# GoogleIdentityStsV1ExchangeOauthTokenRequest

Request message for ExchangeOauthToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Optional. The client identifier for the OAuth 2.0 client that requested the provided token. It is REQUIRED when the [client] (https://www.rfc-editor.org/rfc/rfc6749#section-1.1) is not authenticating with the authorization server, i.e. when authentication method is [client authentication] (https://www.rfc-editor.org/rfc/rfc6749#section-3.2.1). | [optional] 
**code** | **str** | Optional. The authorization code that was previously from workforce identity federation&#39;s &#x60;authorize&#x60; endpoint. Required if the flow is authorization code flow, i.e. if grant_type is &#39;authorization_code&#39; | [optional] 
**code_verifier** | **str** | Optional. The code verifier for the PKCE request, Google Cloud CLI originally generates it before the authorization request. PKCE is used to protect authorization code from interception attacks. See https://www.rfc-editor.org/rfc/rfc7636#section-1.1 and https://www.rfc-editor.org/rfc/rfc7636#section-3. It is required when the flow is authorization code flow, i.e. if grant_type is &#39;authorization_code&#39; | [optional] 
**grant_type** | **str** | Required. The grant types are as follows: - &#39;authorization_code&#39; : an authorization code flow, i.e. exchange of authorization code for the Oauth access token - &#39;refresh_token&#39; : a refresh token flow, i.e. obtain a new access token by providing the refresh token. See https://www.rfc-editor.org/rfc/rfc6749#section-6 | [optional] 
**redirect_uri** | **str** | Optional. redirect_url is required when the flow is authorization code flow i.e. if grant_type is &#x60;authorization_code&#x60; See https://www.rfc-editor.org/rfc/rfc6749#section-4.1.3 | [optional] 
**refresh_token** | **str** | Optional. The Refresh token is the credential that is used to obtain a new access token when the current access token becomes invalid or expires. Required when using refresh token flow, i.e. if &#x60;grant_type&#x60; is &#39;refresh_token&#39; See https://www.rfc-editor.org/rfc/rfc6749#section-1.5 and https://www.rfc-editor.org/rfc/rfc6749#section-6 | [optional] 
**scope** | **str** | Optional. An optional list of scopes that are requested for the token to be returned. See https://www.rfc-editor.org/rfc/rfc6749#section-3.3 Must be a list of space-delimited, case-sensitive strings. Note: Currently, the scopes in the request are not supported | [optional] 

## Example

```python
from openapi_client.models.google_identity_sts_v1_exchange_oauth_token_request import GoogleIdentityStsV1ExchangeOauthTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityStsV1ExchangeOauthTokenRequest from a JSON string
google_identity_sts_v1_exchange_oauth_token_request_instance = GoogleIdentityStsV1ExchangeOauthTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityStsV1ExchangeOauthTokenRequest.to_json())

# convert the object into a dict
google_identity_sts_v1_exchange_oauth_token_request_dict = google_identity_sts_v1_exchange_oauth_token_request_instance.to_dict()
# create an instance of GoogleIdentityStsV1ExchangeOauthTokenRequest from a dict
google_identity_sts_v1_exchange_oauth_token_request_from_dict = GoogleIdentityStsV1ExchangeOauthTokenRequest.from_dict(google_identity_sts_v1_exchange_oauth_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


