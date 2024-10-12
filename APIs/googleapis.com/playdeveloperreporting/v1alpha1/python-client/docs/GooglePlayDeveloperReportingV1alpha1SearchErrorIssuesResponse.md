# GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse

Response with a paginated list of issues that matched the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_issues** | [**List[GooglePlayDeveloperReportingV1alpha1ErrorIssue]**](GooglePlayDeveloperReportingV1alpha1ErrorIssue.md) | ErrorIssues that were found. | [optional] 
**next_page_token** | **str** | Continuation token to fetch the next page of data. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_search_error_issues_response import GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse from a JSON string
google_play_developer_reporting_v1alpha1_search_error_issues_response_instance = GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_search_error_issues_response_dict = google_play_developer_reporting_v1alpha1_search_error_issues_response_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse from a dict
google_play_developer_reporting_v1alpha1_search_error_issues_response_from_dict = GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse.from_dict(google_play_developer_reporting_v1alpha1_search_error_issues_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


