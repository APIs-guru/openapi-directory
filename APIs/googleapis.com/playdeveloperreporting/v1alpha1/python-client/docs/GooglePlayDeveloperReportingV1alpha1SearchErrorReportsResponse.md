# GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse

Response with a paginated list of error reports matching the search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_reports** | [**List[GooglePlayDeveloperReportingV1alpha1ErrorReport]**](GooglePlayDeveloperReportingV1alpha1ErrorReport.md) | Error reports that were found. | [optional] 
**next_page_token** | **str** | Page token to fetch the next page of reports. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_search_error_reports_response import GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse from a JSON string
google_play_developer_reporting_v1alpha1_search_error_reports_response_instance = GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_search_error_reports_response_dict = google_play_developer_reporting_v1alpha1_search_error_reports_response_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse from a dict
google_play_developer_reporting_v1alpha1_search_error_reports_response_from_dict = GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse.from_dict(google_play_developer_reporting_v1alpha1_search_error_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


