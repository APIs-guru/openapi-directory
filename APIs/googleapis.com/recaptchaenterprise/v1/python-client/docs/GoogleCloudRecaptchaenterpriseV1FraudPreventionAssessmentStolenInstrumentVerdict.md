# GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict

Information about stolen instrument fraud, where the user is not the legitimate owner of the instrument being used for the purchase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**risk** | **float** | Output only. Probability of this transaction being executed with a stolen instrument. Values are from 0.0 (lowest) to 1.0 (highest). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_stolen_instrument_verdict import GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict from a JSON string
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_stolen_instrument_verdict_instance = GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_stolen_instrument_verdict_dict = google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_stolen_instrument_verdict_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict from a dict
google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_stolen_instrument_verdict_from_dict = GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict.from_dict(google_cloud_recaptchaenterprise_v1_fraud_prevention_assessment_stolen_instrument_verdict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


