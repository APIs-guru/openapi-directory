# GoogleChecksReportV1alphaDataMonitoringPermissionResult

Information about a permission that was found in your app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**GoogleChecksReportV1alphaDataMonitoringResultMetadata**](GoogleChecksReportV1alphaDataMonitoringResultMetadata.md) |  | [optional] 
**permission** | [**GoogleChecksReportV1alphaPermission**](GoogleChecksReportV1alphaPermission.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_data_monitoring_permission_result import GoogleChecksReportV1alphaDataMonitoringPermissionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaDataMonitoringPermissionResult from a JSON string
google_checks_report_v1alpha_data_monitoring_permission_result_instance = GoogleChecksReportV1alphaDataMonitoringPermissionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaDataMonitoringPermissionResult.to_json())

# convert the object into a dict
google_checks_report_v1alpha_data_monitoring_permission_result_dict = google_checks_report_v1alpha_data_monitoring_permission_result_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaDataMonitoringPermissionResult from a dict
google_checks_report_v1alpha_data_monitoring_permission_result_from_dict = GoogleChecksReportV1alphaDataMonitoringPermissionResult.from_dict(google_checks_report_v1alpha_data_monitoring_permission_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


