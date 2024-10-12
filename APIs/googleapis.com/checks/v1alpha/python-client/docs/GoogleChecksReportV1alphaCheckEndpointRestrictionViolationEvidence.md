# GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence

Evidence collected from endpoint restriction violation analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_details** | [**List[GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceEndpointDetails]**](GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceEndpointDetails.md) | Endpoints in violation. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_check_endpoint_restriction_violation_evidence import GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence from a JSON string
google_checks_report_v1alpha_check_endpoint_restriction_violation_evidence_instance = GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence.to_json())

# convert the object into a dict
google_checks_report_v1alpha_check_endpoint_restriction_violation_evidence_dict = google_checks_report_v1alpha_check_endpoint_restriction_violation_evidence_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence from a dict
google_checks_report_v1alpha_check_endpoint_restriction_violation_evidence_from_dict = GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence.from_dict(google_checks_report_v1alpha_check_endpoint_restriction_violation_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


