# GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment

Assessment for Fraud Prevention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**behavioral_trust_verdict** | [**GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict**](GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict.md) |  | [optional] 
**card_testing_verdict** | [**GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict**](GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict.md) |  | [optional] 
**stolen_instrument_verdict** | [**GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict**](GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict.md) |  | [optional] 
**transaction_risk** | **float** | Output only. Probability of this transaction being fraudulent. Summarizes the combined risk of attack vectors below. Values are from 0.0 (lowest) to 1.0 (highest). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment import GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment from a JSON string
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_instance = GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_dict = google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment from a dict
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_from_dict = GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment.from_dict(google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


