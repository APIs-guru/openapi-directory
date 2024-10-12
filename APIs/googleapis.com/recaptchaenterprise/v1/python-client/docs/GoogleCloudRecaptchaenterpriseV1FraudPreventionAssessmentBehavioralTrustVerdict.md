# GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict

Information about behavioral trust of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trust** | **float** | Output only. Probability of this transaction attempt being executed in a behaviorally trustworthy way. Values are from 0.0 (lowest) to 1.0 (highest). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_behavioral_trust_verdict import GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict from a JSON string
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_behavioral_trust_verdict_instance = GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_behavioral_trust_verdict_dict = google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_behavioral_trust_verdict_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict from a dict
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_behavioral_trust_verdict_from_dict = GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict.from_dict(google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_behavioral_trust_verdict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


