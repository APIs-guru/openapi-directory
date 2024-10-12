# GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest

Request message for the ExchangeCustomToken method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_token** | **str** | Required. A custom token signed using your project&#39;s Admin SDK service account credentials. | [optional] 
**limited_use** | **bool** | Specifies whether this attestation is for use in a *limited use* (&#x60;true&#x60;) or *session based* (&#x60;false&#x60;) context. To enable this attestation to be used with the *replay protection* feature, set this to &#x60;true&#x60;. The default value is &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_exchange_custom_token_request import GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest from a JSON string
google_firebase_appcheck_v1_exchange_custom_token_request_instance = GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_exchange_custom_token_request_dict = google_firebase_appcheck_v1_exchange_custom_token_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest from a dict
google_firebase_appcheck_v1_exchange_custom_token_request_from_dict = GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest.from_dict(google_firebase_appcheck_v1_exchange_custom_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


