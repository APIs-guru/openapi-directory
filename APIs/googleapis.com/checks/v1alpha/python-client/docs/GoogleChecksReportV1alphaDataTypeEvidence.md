# GoogleChecksReportV1alphaDataTypeEvidence

Evidence collected about a data type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoints** | [**List[GoogleChecksReportV1alphaDataTypeEndpointEvidence]**](GoogleChecksReportV1alphaDataTypeEndpointEvidence.md) | List of endpoints the data type was sent to. | [optional] 
**permissions** | [**List[GoogleChecksReportV1alphaDataTypePermissionEvidence]**](GoogleChecksReportV1alphaDataTypePermissionEvidence.md) | List of included permissions that imply collection of the data type. | [optional] 
**privacy_policy_texts** | [**List[GoogleChecksReportV1alphaDataTypePrivacyPolicyTextEvidence]**](GoogleChecksReportV1alphaDataTypePrivacyPolicyTextEvidence.md) | List of privacy policy texts that imply collection of the data type. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_data_type_evidence import GoogleChecksReportV1alphaDataTypeEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaDataTypeEvidence from a JSON string
google_checks_report_v1alpha_data_type_evidence_instance = GoogleChecksReportV1alphaDataTypeEvidence.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaDataTypeEvidence.to_json())

# convert the object into a dict
google_checks_report_v1alpha_data_type_evidence_dict = google_checks_report_v1alpha_data_type_evidence_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaDataTypeEvidence from a dict
google_checks_report_v1alpha_data_type_evidence_from_dict = GoogleChecksReportV1alphaDataTypeEvidence.from_dict(google_checks_report_v1alpha_data_type_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


