# GoogleChecksReportV1alphaCheckSdkIssueEvidence

Evidence concerning an SDK issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdk** | [**GoogleChecksReportV1alphaSdk**](GoogleChecksReportV1alphaSdk.md) |  | [optional] 
**sdk_version** | **str** | The SDK version. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_check_sdk_issue_evidence import GoogleChecksReportV1alphaCheckSdkIssueEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaCheckSdkIssueEvidence from a JSON string
google_checks_report_v1alpha_check_sdk_issue_evidence_instance = GoogleChecksReportV1alphaCheckSdkIssueEvidence.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaCheckSdkIssueEvidence.to_json())

# convert the object into a dict
google_checks_report_v1alpha_check_sdk_issue_evidence_dict = google_checks_report_v1alpha_check_sdk_issue_evidence_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaCheckSdkIssueEvidence from a dict
google_checks_report_v1alpha_check_sdk_issue_evidence_from_dict = GoogleChecksReportV1alphaCheckSdkIssueEvidence.from_dict(google_checks_report_v1alpha_check_sdk_issue_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


