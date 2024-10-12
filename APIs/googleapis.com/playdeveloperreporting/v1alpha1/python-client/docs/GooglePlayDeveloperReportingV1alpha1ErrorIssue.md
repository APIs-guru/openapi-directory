# GooglePlayDeveloperReportingV1alpha1ErrorIssue

A group of related ErrorReports received for an app. Similar error reports are grouped together into issues with a likely identical root cause. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to different issues. This could also cause some issues disappearing entirely and being replaced by new ones. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | **str** | Cause of the issue. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the type of ANR that occurred, e.g., &#39;Input dispatching timed out&#39;. * CRASH: for Java unhandled exception errors, the type of the innermost exception that was thrown, e.g., IllegalArgumentException. For signals in native code, the signal that was raised, e.g. SIGSEGV. | [optional] 
**distinct_users** | **str** | An estimate of the number of unique users who have experienced this issue (only considering occurrences matching the filters and within the requested time period). | [optional] 
**distinct_users_percent** | [**GoogleTypeDecimal**](GoogleTypeDecimal.md) |  | [optional] 
**error_report_count** | **str** | The total number of error reports in this issue (only considering occurrences matching the filters and within the requested time period). | [optional] 
**first_app_version** | [**GooglePlayDeveloperReportingV1alpha1AppVersion**](GooglePlayDeveloperReportingV1alpha1AppVersion.md) |  | [optional] 
**first_os_version** | [**GooglePlayDeveloperReportingV1alpha1OsVersion**](GooglePlayDeveloperReportingV1alpha1OsVersion.md) |  | [optional] 
**issue_uri** | **str** | Link to the issue in Android vitals in the Play Console. | [optional] 
**last_app_version** | [**GooglePlayDeveloperReportingV1alpha1AppVersion**](GooglePlayDeveloperReportingV1alpha1AppVersion.md) |  | [optional] 
**last_error_report_time** | **str** | Start of the hour during which the last error report in this issue occurred. | [optional] 
**last_os_version** | [**GooglePlayDeveloperReportingV1alpha1OsVersion**](GooglePlayDeveloperReportingV1alpha1OsVersion.md) |  | [optional] 
**location** | **str** | Location where the issue happened. Depending on the type this can be either: * APPLICATION_NOT_RESPONDING: the name of the activity or service that stopped responding. * CRASH: the likely method name that caused the error. | [optional] 
**name** | **str** | Identifier. The resource name of the issue. Format: apps/{app}/{issue} | [optional] 
**type** | **str** | Type of the errors grouped in this issue. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_error_issue import GooglePlayDeveloperReportingV1alpha1ErrorIssue

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1ErrorIssue from a JSON string
google_play_developer_reporting_v1alpha1_error_issue_instance = GooglePlayDeveloperReportingV1alpha1ErrorIssue.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1ErrorIssue.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_error_issue_dict = google_play_developer_reporting_v1alpha1_error_issue_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1ErrorIssue from a dict
google_play_developer_reporting_v1alpha1_error_issue_from_dict = GooglePlayDeveloperReportingV1alpha1ErrorIssue.from_dict(google_play_developer_reporting_v1alpha1_error_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


