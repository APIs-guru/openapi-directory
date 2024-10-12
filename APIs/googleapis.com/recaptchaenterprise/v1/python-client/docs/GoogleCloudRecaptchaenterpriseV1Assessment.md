# GoogleCloudRecaptchaenterpriseV1Assessment

A reCAPTCHA Enterprise assessment resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_defender_assessment** | [**GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment**](GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment.md) |  | [optional] 
**account_verification** | [**GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo**](GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo.md) |  | [optional] 
**event** | [**GoogleCloudRecaptchaenterpriseV1Event**](GoogleCloudRecaptchaenterpriseV1Event.md) |  | [optional] 
**firewall_policy_assessment** | [**GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment**](GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment.md) |  | [optional] 
**fraud_prevention_assessment** | [**GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment**](GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment.md) |  | [optional] 
**fraud_signals** | [**GoogleCloudRecaptchaenterpriseV1FraudSignals**](GoogleCloudRecaptchaenterpriseV1FraudSignals.md) |  | [optional] 
**name** | **str** | Output only. Identifier. The resource name for the Assessment in the format &#x60;projects/{project}/assessments/{assessment}&#x60;. | [optional] [readonly] 
**private_password_leak_verification** | [**GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification**](GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification.md) |  | [optional] 
**risk_analysis** | [**GoogleCloudRecaptchaenterpriseV1RiskAnalysis**](GoogleCloudRecaptchaenterpriseV1RiskAnalysis.md) |  | [optional] 
**token_properties** | [**GoogleCloudRecaptchaenterpriseV1TokenProperties**](GoogleCloudRecaptchaenterpriseV1TokenProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_assessment import GoogleCloudRecaptchaenterpriseV1Assessment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1Assessment from a JSON string
google_cloud_recaptchaenterprise_v1_assessment_instance = GoogleCloudRecaptchaenterpriseV1Assessment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1Assessment.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_assessment_dict = google_cloud_recaptchaenterprise_v1_assessment_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1Assessment from a dict
google_cloud_recaptchaenterprise_v1_assessment_from_dict = GoogleCloudRecaptchaenterpriseV1Assessment.from_dict(google_cloud_recaptchaenterprise_v1_assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


