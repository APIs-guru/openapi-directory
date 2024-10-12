# GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence

Evidence collected from SDK restriction violation analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdk_details** | [**List[GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceSdkDetails]**](GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceSdkDetails.md) | SDKs in violation. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_check_sdk_restriction_violation_evidence import GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence from a JSON string
google_checks_report_v1alpha_check_sdk_restriction_violation_evidence_instance = GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence.to_json())

# convert the object into a dict
google_checks_report_v1alpha_check_sdk_restriction_violation_evidence_dict = google_checks_report_v1alpha_check_sdk_restriction_violation_evidence_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence from a dict
google_checks_report_v1alpha_check_sdk_restriction_violation_evidence_from_dict = GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence.from_dict(google_checks_report_v1alpha_check_sdk_restriction_violation_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


