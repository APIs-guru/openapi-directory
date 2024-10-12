# GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule

The config for a reCAPTCHA managed rule. Models a single interval [start_score, end_score]. The start_score is implicit. It is either the closest smaller end_score (if one is available) or 0. Intervals in aggregate span [0, 1] without overlapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action taken if the reCAPTCHA score of a request is within the interval [start_score, end_score]. | [optional] 
**end_score** | **float** | The end score (inclusive) of the score range for an action. Must be a value between 0.0 and 1.0, at 11 discrete values; e.g. 0, 0.1, 0.2, 0.3, ... 0.9, 1.0. A score of 0.0 indicates the riskiest request (likely a bot), whereas 1.0 indicates the safest request (likely a human). See https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_recaptcha_managed_rule import GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule from a JSON string
google_cloud_identitytoolkit_admin_v2_recaptcha_managed_rule_instance = GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_recaptcha_managed_rule_dict = google_cloud_identitytoolkit_admin_v2_recaptcha_managed_rule_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule from a dict
google_cloud_identitytoolkit_admin_v2_recaptcha_managed_rule_from_dict = GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule.from_dict(google_cloud_identitytoolkit_admin_v2_recaptcha_managed_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


