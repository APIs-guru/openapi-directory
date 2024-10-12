# GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState

Enforcement states for reCAPTCHA protection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforcement_state** | **str** | The reCAPTCHA enforcement state for the provider. | [optional] 
**provider** | **str** | The provider that has reCAPTCHA protection. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_recaptcha_enforcement_state import GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState from a JSON string
google_cloud_identitytoolkit_v2_recaptcha_enforcement_state_instance = GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_recaptcha_enforcement_state_dict = google_cloud_identitytoolkit_v2_recaptcha_enforcement_state_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState from a dict
google_cloud_identitytoolkit_v2_recaptcha_enforcement_state_from_dict = GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState.from_dict(google_cloud_identitytoolkit_v2_recaptcha_enforcement_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


