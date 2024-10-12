# GoogleChecksReportV1alphaAnalyzeUploadRequest

The request message for ReportService.AnalyzeUpload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_binary_file_type** | **str** | Optional. The type of the uploaded app binary. If not provided, the server assumes APK file for Android and IPA file for iOS. | [optional] 
**code_reference_id** | **str** | Optional. Git commit hash or changelist number associated with the upload. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_analyze_upload_request import GoogleChecksReportV1alphaAnalyzeUploadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaAnalyzeUploadRequest from a JSON string
google_checks_report_v1alpha_analyze_upload_request_instance = GoogleChecksReportV1alphaAnalyzeUploadRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaAnalyzeUploadRequest.to_json())

# convert the object into a dict
google_checks_report_v1alpha_analyze_upload_request_dict = google_checks_report_v1alpha_analyze_upload_request_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaAnalyzeUploadRequest from a dict
google_checks_report_v1alpha_analyze_upload_request_from_dict = GoogleChecksReportV1alphaAnalyzeUploadRequest.from_dict(google_checks_report_v1alpha_analyze_upload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


