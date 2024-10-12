# GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig

An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig &#x60;&#x60;&#x60; | [optional] 
**site_key** | **str** | The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the &#x60;site_secret&#x60; (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key. | [optional] 
**token_ttl** | **str** | Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_recaptcha_enterprise_config import GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig from a JSON string
google_firebase_appcheck_v1beta_recaptcha_enterprise_config_instance = GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_recaptcha_enterprise_config_dict = google_firebase_appcheck_v1beta_recaptcha_enterprise_config_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig from a dict
google_firebase_appcheck_v1beta_recaptcha_enterprise_config_from_dict = GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig.from_dict(google_firebase_appcheck_v1beta_recaptcha_enterprise_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


