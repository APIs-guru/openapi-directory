# GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest

Request message for the ExchangeRecaptchaV3Token method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limited_use** | **bool** | Specifies whether this attestation is for use in a *limited use* (&#x60;true&#x60;) or *session based* (&#x60;false&#x60;) context. To enable this attestation to be used with the *replay protection* feature, set this to &#x60;true&#x60;. The default value is &#x60;false&#x60;. | [optional] 
**recaptcha_v3_token** | **str** | Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3). | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request import GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest from a JSON string
google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request_instance = GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request_dict = google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest from a dict
google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request_from_dict = GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest.from_dict(google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


