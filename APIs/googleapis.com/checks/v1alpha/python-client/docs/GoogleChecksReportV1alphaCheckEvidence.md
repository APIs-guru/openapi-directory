# GoogleChecksReportV1alphaCheckEvidence

Evidence for a check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_security** | [**GoogleChecksReportV1alphaCheckDataSecurityEvidence**](GoogleChecksReportV1alphaCheckDataSecurityEvidence.md) |  | [optional] 
**data_types** | [**List[GoogleChecksReportV1alphaCheckDataTypeEvidence]**](GoogleChecksReportV1alphaCheckDataTypeEvidence.md) | Evidence concerning data types found in your app. | [optional] 
**endpoint_restriction_violations** | [**List[GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence]**](GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence.md) | Evidence collected from endpoint restriction violation analysis. | [optional] 
**endpoints** | [**List[GoogleChecksReportV1alphaCheckEndpointEvidence]**](GoogleChecksReportV1alphaCheckEndpointEvidence.md) | Evidence concerning endpoints that were contacted by your app. | [optional] 
**permission_restriction_violations** | [**List[GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence]**](GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence.md) | Evidence collected from permission restriction violation analysis. | [optional] 
**permissions** | [**List[GoogleChecksReportV1alphaCheckPermissionEvidence]**](GoogleChecksReportV1alphaCheckPermissionEvidence.md) | Evidence concerning permissions that were found in your app. | [optional] 
**privacy_policy_texts** | [**List[GoogleChecksReportV1alphaCheckPrivacyPolicyTextEvidence]**](GoogleChecksReportV1alphaCheckPrivacyPolicyTextEvidence.md) | Evidence collected from your privacy policy(s). | [optional] 
**sdk_issues** | [**List[GoogleChecksReportV1alphaCheckSdkIssueEvidence]**](GoogleChecksReportV1alphaCheckSdkIssueEvidence.md) | Evidence concerning SDK issues. | [optional] 
**sdk_restriction_violations** | [**List[GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence]**](GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence.md) | Evidence collected from SDK restriction violation analysis. | [optional] 
**sdks** | [**List[GoogleChecksReportV1alphaCheckSdkEvidence]**](GoogleChecksReportV1alphaCheckSdkEvidence.md) | Evidence concerning SDKs that were found in your app. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_check_evidence import GoogleChecksReportV1alphaCheckEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaCheckEvidence from a JSON string
google_checks_report_v1alpha_check_evidence_instance = GoogleChecksReportV1alphaCheckEvidence.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaCheckEvidence.to_json())

# convert the object into a dict
google_checks_report_v1alpha_check_evidence_dict = google_checks_report_v1alpha_check_evidence_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaCheckEvidence from a dict
google_checks_report_v1alpha_check_evidence_from_dict = GoogleChecksReportV1alphaCheckEvidence.from_dict(google_checks_report_v1alpha_check_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


