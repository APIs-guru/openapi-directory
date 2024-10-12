# GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest

Request message for the ExchangeRecaptchaToken method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recaptcha_token** | **str** | Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3). | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_recaptcha_token_request import GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest from a JSON string
google_firebase_appcheck_v1beta_exchange_recaptcha_token_request_instance = GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_exchange_recaptcha_token_request_dict = google_firebase_appcheck_v1beta_exchange_recaptcha_token_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest from a dict
google_firebase_appcheck_v1beta_exchange_recaptcha_token_request_from_dict = GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest.from_dict(google_firebase_appcheck_v1beta_exchange_recaptcha_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


