# GoogleChecksReportV1alphaListReportsResponse

The response message for ReportService.ListReports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**reports** | [**List[GoogleChecksReportV1alphaReport]**](GoogleChecksReportV1alphaReport.md) | The reports for the specified app. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_list_reports_response import GoogleChecksReportV1alphaListReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaListReportsResponse from a JSON string
google_checks_report_v1alpha_list_reports_response_instance = GoogleChecksReportV1alphaListReportsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaListReportsResponse.to_json())

# convert the object into a dict
google_checks_report_v1alpha_list_reports_response_dict = google_checks_report_v1alpha_list_reports_response_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaListReportsResponse from a dict
google_checks_report_v1alpha_list_reports_response_from_dict = GoogleChecksReportV1alphaListReportsResponse.from_dict(google_checks_report_v1alpha_list_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


