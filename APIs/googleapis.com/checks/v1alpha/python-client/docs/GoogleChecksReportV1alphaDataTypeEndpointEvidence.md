# GoogleChecksReportV1alphaDataTypeEndpointEvidence

Evidence based on an endpoint that data was sent to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributed_sdks** | [**List[GoogleChecksReportV1alphaDataTypeEndpointEvidenceAttributedSdk]**](GoogleChecksReportV1alphaDataTypeEndpointEvidenceAttributedSdk.md) | Set of SDKs that are attributed to the exfiltration. | [optional] 
**endpoint_details** | [**List[GoogleChecksReportV1alphaDataTypeEndpointEvidenceEndpointDetails]**](GoogleChecksReportV1alphaDataTypeEndpointEvidenceEndpointDetails.md) | Endpoints the data type was sent to. | [optional] 
**exfiltrated_data_type** | **str** | Type of data that was exfiltrated. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_data_type_endpoint_evidence import GoogleChecksReportV1alphaDataTypeEndpointEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaDataTypeEndpointEvidence from a JSON string
google_checks_report_v1alpha_data_type_endpoint_evidence_instance = GoogleChecksReportV1alphaDataTypeEndpointEvidence.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaDataTypeEndpointEvidence.to_json())

# convert the object into a dict
google_checks_report_v1alpha_data_type_endpoint_evidence_dict = google_checks_report_v1alpha_data_type_endpoint_evidence_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaDataTypeEndpointEvidence from a dict
google_checks_report_v1alpha_data_type_endpoint_evidence_from_dict = GoogleChecksReportV1alphaDataTypeEndpointEvidence.from_dict(google_checks_report_v1alpha_data_type_endpoint_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


