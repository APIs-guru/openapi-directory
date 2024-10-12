# GoogleChecksReportV1alphaCheckDataTypeEvidence

Evidence concerning a data type that was found in your app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The data type that was found in your app. | [optional] 
**data_type_evidence** | [**GoogleChecksReportV1alphaDataTypeEvidence**](GoogleChecksReportV1alphaDataTypeEvidence.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_check_data_type_evidence import GoogleChecksReportV1alphaCheckDataTypeEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaCheckDataTypeEvidence from a JSON string
google_checks_report_v1alpha_check_data_type_evidence_instance = GoogleChecksReportV1alphaCheckDataTypeEvidence.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaCheckDataTypeEvidence.to_json())

# convert the object into a dict
google_checks_report_v1alpha_check_data_type_evidence_dict = google_checks_report_v1alpha_check_data_type_evidence_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaCheckDataTypeEvidence from a dict
google_checks_report_v1alpha_check_data_type_evidence_from_dict = GoogleChecksReportV1alphaCheckDataTypeEvidence.from_dict(google_checks_report_v1alpha_check_data_type_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


