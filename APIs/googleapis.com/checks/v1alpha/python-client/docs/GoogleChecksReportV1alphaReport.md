# GoogleChecksReportV1alphaReport

Privacy report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_bundle** | [**GoogleChecksReportV1alphaAppBundle**](GoogleChecksReportV1alphaAppBundle.md) |  | [optional] 
**checks** | [**List[GoogleChecksReportV1alphaCheck]**](GoogleChecksReportV1alphaCheck.md) | List of checks that were run on the app bundle. | [optional] 
**data_monitoring** | [**GoogleChecksReportV1alphaDataMonitoring**](GoogleChecksReportV1alphaDataMonitoring.md) |  | [optional] 
**name** | **str** | Resource name of the report. | [optional] 
**results_uri** | **str** | A URL to view results. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_report import GoogleChecksReportV1alphaReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaReport from a JSON string
google_checks_report_v1alpha_report_instance = GoogleChecksReportV1alphaReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaReport.to_json())

# convert the object into a dict
google_checks_report_v1alpha_report_dict = google_checks_report_v1alpha_report_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaReport from a dict
google_checks_report_v1alpha_report_from_dict = GoogleChecksReportV1alphaReport.from_dict(google_checks_report_v1alpha_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


