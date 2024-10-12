# GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence

Evidence collected from permission restriction violation analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission_details** | [**List[GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidencePermissionDetails]**](GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidencePermissionDetails.md) | Permissions in violation. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_check_permission_restriction_violation_evidence import GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence from a JSON string
google_checks_report_v1alpha_check_permission_restriction_violation_evidence_instance = GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence.to_json())

# convert the object into a dict
google_checks_report_v1alpha_check_permission_restriction_violation_evidence_dict = google_checks_report_v1alpha_check_permission_restriction_violation_evidence_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence from a dict
google_checks_report_v1alpha_check_permission_restriction_violation_evidence_from_dict = GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence.from_dict(google_checks_report_v1alpha_check_permission_restriction_violation_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


