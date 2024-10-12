# GoogleCloudRecaptchaenterpriseV1TestingOptions

Options for user acceptance testing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**testing_challenge** | **str** | Optional. For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if CHALLENGE. | [optional] 
**testing_score** | **float** | Optional. All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_testing_options import GoogleCloudRecaptchaenterpriseV1TestingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1TestingOptions from a JSON string
google_cloud_recaptchaenterprise_v1_testing_options_instance = GoogleCloudRecaptchaenterpriseV1TestingOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1TestingOptions.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_testing_options_dict = google_cloud_recaptchaenterprise_v1_testing_options_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1TestingOptions from a dict
google_cloud_recaptchaenterprise_v1_testing_options_from_dict = GoogleCloudRecaptchaenterpriseV1TestingOptions.from_dict(google_cloud_recaptchaenterprise_v1_testing_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


