# GoogleFirebaseAppcheckV1RecaptchaV3Config

An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/recaptchaV3Config &#x60;&#x60;&#x60; | [optional] 
**site_secret** | **str** | Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response. | [optional] 
**site_secret_set** | **bool** | Output only. Whether the &#x60;site_secret&#x60; field was previously set. Since we will never return the &#x60;site_secret&#x60; field, this field is the only way to find out whether it was previously set. | [optional] [readonly] 
**token_ttl** | **str** | Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_recaptcha_v3_config import GoogleFirebaseAppcheckV1RecaptchaV3Config

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1RecaptchaV3Config from a JSON string
google_firebase_appcheck_v1_recaptcha_v3_config_instance = GoogleFirebaseAppcheckV1RecaptchaV3Config.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1RecaptchaV3Config.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_recaptcha_v3_config_dict = google_firebase_appcheck_v1_recaptcha_v3_config_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1RecaptchaV3Config from a dict
google_firebase_appcheck_v1_recaptcha_v3_config_from_dict = GoogleFirebaseAppcheckV1RecaptchaV3Config.from_dict(google_firebase_appcheck_v1_recaptcha_v3_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


