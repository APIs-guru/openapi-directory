# GoogleIdentityStsV1ExchangeTokenResponse

Response message for ExchangeToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | An OAuth 2.0 security token, issued by Google, in response to the token exchange request. Tokens can vary in size, depending in part on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time. | [optional] 
**expires_in** | **int** | The amount of time, in seconds, between the time when the access token was issued and the time when the access token will expire. This field is absent when the &#x60;subject_token&#x60; in the request is a Google-issued, short-lived access token. In this case, the access token has the same expiration time as the &#x60;subject_token&#x60;. | [optional] 
**issued_token_type** | **str** | The token type. Always matches the value of &#x60;requested_token_type&#x60; from the request. | [optional] 
**token_type** | **str** | The type of access token. Always has the value &#x60;Bearer&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_identity_sts_v1_exchange_token_response import GoogleIdentityStsV1ExchangeTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityStsV1ExchangeTokenResponse from a JSON string
google_identity_sts_v1_exchange_token_response_instance = GoogleIdentityStsV1ExchangeTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityStsV1ExchangeTokenResponse.to_json())

# convert the object into a dict
google_identity_sts_v1_exchange_token_response_dict = google_identity_sts_v1_exchange_token_response_instance.to_dict()
# create an instance of GoogleIdentityStsV1ExchangeTokenResponse from a dict
google_identity_sts_v1_exchange_token_response_from_dict = GoogleIdentityStsV1ExchangeTokenResponse.from_dict(google_identity_sts_v1_exchange_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


