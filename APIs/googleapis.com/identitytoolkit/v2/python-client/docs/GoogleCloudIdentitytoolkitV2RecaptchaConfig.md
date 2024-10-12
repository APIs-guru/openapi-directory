# GoogleCloudIdentitytoolkitV2RecaptchaConfig

Configuration for reCAPTCHA

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recaptcha_enforcement_state** | [**List[GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState]**](GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState.md) | The reCAPTCHA enforcement state for the providers that GCIP supports reCAPTCHA protection. | [optional] 
**recaptcha_key** | **str** | The reCAPTCHA Enterprise key resource name, e.g. \&quot;projects/{project}/keys/{key}\&quot;. This will only be returned when the reCAPTCHA enforcement state is AUDIT or ENFORCE on at least one of the reCAPTCHA providers. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_recaptcha_config import GoogleCloudIdentitytoolkitV2RecaptchaConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2RecaptchaConfig from a JSON string
google_cloud_identitytoolkit_v2_recaptcha_config_instance = GoogleCloudIdentitytoolkitV2RecaptchaConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2RecaptchaConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_recaptcha_config_dict = google_cloud_identitytoolkit_v2_recaptcha_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2RecaptchaConfig from a dict
google_cloud_identitytoolkit_v2_recaptcha_config_from_dict = GoogleCloudIdentitytoolkitV2RecaptchaConfig.from_dict(google_cloud_identitytoolkit_v2_recaptcha_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


