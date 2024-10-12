# GooglePlayDeveloperReportingV1beta1ErrorReport

An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | [**GooglePlayDeveloperReportingV1beta1AppVersion**](GooglePlayDeveloperReportingV1beta1AppVersion.md) |  | [optional] 
**device_model** | [**GooglePlayDeveloperReportingV1beta1DeviceModelSummary**](GooglePlayDeveloperReportingV1beta1DeviceModelSummary.md) |  | [optional] 
**event_time** | **str** | Start of the hour during which the latest event in this error report occurred. | [optional] 
**issue** | **str** | The issue this report was associated with. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to a different issue. | [optional] 
**name** | **str** | The resource name of the report. Format: apps/{app}/{report} | [optional] 
**os_version** | [**GooglePlayDeveloperReportingV1beta1OsVersion**](GooglePlayDeveloperReportingV1beta1OsVersion.md) |  | [optional] 
**report_text** | **str** | Textual representation of the error report. These textual reports are produced by the platform. The reports are then sanitized and filtered to remove any potentially sensitive information. Although their format is fairly stable, they are not entirely meant for machine consumption and we cannot guarantee that there won&#39;t be subtle changes to the formatting that may break systems trying to parse information out of the reports. | [optional] 
**type** | **str** | Type of the error for which this report was generated. | [optional] 
**vcs_information** | **str** | Version control system information from BUNDLE-METADATA/version-control-info.textproto or META-INF/version-control-info.textproto of the app bundle or APK, respectively. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_error_report import GooglePlayDeveloperReportingV1beta1ErrorReport

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1ErrorReport from a JSON string
google_play_developer_reporting_v1beta1_error_report_instance = GooglePlayDeveloperReportingV1beta1ErrorReport.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1ErrorReport.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_error_report_dict = google_play_developer_reporting_v1beta1_error_report_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1ErrorReport from a dict
google_play_developer_reporting_v1beta1_error_report_from_dict = GooglePlayDeveloperReportingV1beta1ErrorReport.from_dict(google_play_developer_reporting_v1beta1_error_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


