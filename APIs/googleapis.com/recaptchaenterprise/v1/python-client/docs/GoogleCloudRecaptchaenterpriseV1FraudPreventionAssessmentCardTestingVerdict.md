# GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict

Information about card testing fraud, where an adversary is testing fraudulently obtained cards or brute forcing their details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**risk** | **float** | Output only. Probability of this transaction attempt being part of a card testing attack. Values are from 0.0 (lowest) to 1.0 (highest). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_card_testing_verdict import GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict from a JSON string
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_card_testing_verdict_instance = GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_card_testing_verdict_dict = google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_card_testing_verdict_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict from a dict
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_card_testing_verdict_from_dict = GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict.from_dict(google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_card_testing_verdict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


