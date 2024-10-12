# GoogleIdentityStsV1ExchangeOauthTokenResponse

Response message for ExchangeOauthToken. see https://www.rfc-editor.org/rfc/rfc6749#section-5.1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | An OAuth 2.0 security token, issued by Google, in response to the Oauth token exchange request for the authorization code and refresh token flows. The returned [access token](https://www.rfc-editor.org/rfc/rfc6749#section-4.1.4). Tokens can vary in size, depending, in part, on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time. | [optional] 
**expires_in** | **int** | The amount of time, in seconds, between the time when the access token was issued and the time when the access token will expires. | [optional] 
**id_token** | **str** | Google issued ID token in response to the OAuth token exchange request for ID token flow. | [optional] 
**refresh_token** | **str** | A refresh token, issued by Google, in response to the OAuth token exchange request for refresh token flow | [optional] 
**scope** | **str** | A list of scopes associated with the returned token. | [optional] 
**token_type** | **str** | The type of token. Field reserved for RFC compliance. See https://www.rfc-editor.org/rfc/rfc6749#section-5.1 | [optional] 

## Example

```python
from openapi_client.models.google_identity_sts_v1_exchange_oauth_token_response import GoogleIdentityStsV1ExchangeOauthTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityStsV1ExchangeOauthTokenResponse from a JSON string
google_identity_sts_v1_exchange_oauth_token_response_instance = GoogleIdentityStsV1ExchangeOauthTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityStsV1ExchangeOauthTokenResponse.to_json())

# convert the object into a dict
google_identity_sts_v1_exchange_oauth_token_response_dict = google_identity_sts_v1_exchange_oauth_token_response_instance.to_dict()
# create an instance of GoogleIdentityStsV1ExchangeOauthTokenResponse from a dict
google_identity_sts_v1_exchange_oauth_token_response_from_dict = GoogleIdentityStsV1ExchangeOauthTokenResponse.from_dict(google_identity_sts_v1_exchange_oauth_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


