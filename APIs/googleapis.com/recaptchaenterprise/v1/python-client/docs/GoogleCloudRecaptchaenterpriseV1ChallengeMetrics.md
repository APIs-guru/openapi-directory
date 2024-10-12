# GoogleCloudRecaptchaenterpriseV1ChallengeMetrics

Metrics related to challenges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_count** | **str** | Count of submitted challenge solutions that were incorrect or otherwise deemed suspicious such that a subsequent challenge was triggered. | [optional] 
**nocaptcha_count** | **str** | Count of nocaptchas (successful verification without a challenge) issued. | [optional] 
**pageload_count** | **str** | Count of reCAPTCHA checkboxes or badges rendered. This is mostly equivalent to a count of pageloads for pages that include reCAPTCHA. | [optional] 
**passed_count** | **str** | Count of nocaptchas (successful verification without a challenge) plus submitted challenge solutions that were correct and resulted in verification. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_challenge_metrics import GoogleCloudRecaptchaenterpriseV1ChallengeMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1ChallengeMetrics from a JSON string
google_cloud_recaptchaenterprise_v1_challenge_metrics_instance = GoogleCloudRecaptchaenterpriseV1ChallengeMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1ChallengeMetrics.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_challenge_metrics_dict = google_cloud_recaptchaenterprise_v1_challenge_metrics_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1ChallengeMetrics from a dict
google_cloud_recaptchaenterprise_v1_challenge_metrics_from_dict = GoogleCloudRecaptchaenterpriseV1ChallengeMetrics.from_dict(google_cloud_recaptchaenterprise_v1_challenge_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


