# GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment

Policy config assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**firewall_policy** | [**GoogleCloudRecaptchaenterpriseV1FirewallPolicy**](GoogleCloudRecaptchaenterpriseV1FirewallPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_firewall_policy_assessment import GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment from a JSON string
google_cloud_recaptchaenterprise_v1_firewall_policy_assessment_instance = GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_firewall_policy_assessment_dict = google_cloud_recaptchaenterprise_v1_firewall_policy_assessment_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment from a dict
google_cloud_recaptchaenterprise_v1_firewall_policy_assessment_from_dict = GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment.from_dict(google_cloud_recaptchaenterprise_v1_firewall_policy_assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


