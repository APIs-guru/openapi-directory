# GoogleChecksReportV1alphaCheckDataSecurityEvidence

Evidence concerning data security.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_in_transit_info** | [**List[GoogleChecksReportV1alphaCheckDataSecurityEvidenceDataInTransitInfo]**](GoogleChecksReportV1alphaCheckDataSecurityEvidenceDataInTransitInfo.md) | Evidence related to data in transit. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_check_data_security_evidence import GoogleChecksReportV1alphaCheckDataSecurityEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaCheckDataSecurityEvidence from a JSON string
google_checks_report_v1alpha_check_data_security_evidence_instance = GoogleChecksReportV1alphaCheckDataSecurityEvidence.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaCheckDataSecurityEvidence.to_json())

# convert the object into a dict
google_checks_report_v1alpha_check_data_security_evidence_dict = google_checks_report_v1alpha_check_data_security_evidence_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaCheckDataSecurityEvidence from a dict
google_checks_report_v1alpha_check_data_security_evidence_from_dict = GoogleChecksReportV1alphaCheckDataSecurityEvidence.from_dict(google_checks_report_v1alpha_check_data_security_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


