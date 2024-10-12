# GoogleChecksReportV1alphaCheck

A check that was run on your app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**citations** | [**List[GoogleChecksReportV1alphaCheckCitation]**](GoogleChecksReportV1alphaCheckCitation.md) | Regulations and policies that serve as the legal basis for the check. | [optional] 
**evidence** | [**GoogleChecksReportV1alphaCheckEvidence**](GoogleChecksReportV1alphaCheckEvidence.md) |  | [optional] 
**region_codes** | **List[str]** | Regions that are impacted by the check. For more info, see https://google.aip.dev/143#countries-and-regions. | [optional] 
**severity** | **str** | The urgency or risk level of the check. | [optional] 
**state** | **str** | The result after running the check. | [optional] 
**state_metadata** | [**GoogleChecksReportV1alphaCheckStateMetadata**](GoogleChecksReportV1alphaCheckStateMetadata.md) |  | [optional] 
**type** | **str** | The type of check that was run. A type will only appear once in a report&#39;s list of checks. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_check import GoogleChecksReportV1alphaCheck

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaCheck from a JSON string
google_checks_report_v1alpha_check_instance = GoogleChecksReportV1alphaCheck.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaCheck.to_json())

# convert the object into a dict
google_checks_report_v1alpha_check_dict = google_checks_report_v1alpha_check_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaCheck from a dict
google_checks_report_v1alpha_check_from_dict = GoogleChecksReportV1alphaCheck.from_dict(google_checks_report_v1alpha_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


