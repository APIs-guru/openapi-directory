# GoogleChecksReportV1alphaDataMonitoring

Represents the data monitoring section of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_types** | [**List[GoogleChecksReportV1alphaDataMonitoringDataTypeResult]**](GoogleChecksReportV1alphaDataMonitoringDataTypeResult.md) | Data types that your app shares or collects. | [optional] 
**endpoints** | [**List[GoogleChecksReportV1alphaDataMonitoringEndpointResult]**](GoogleChecksReportV1alphaDataMonitoringEndpointResult.md) | Endpoints that were found by dynamic analysis of your app. | [optional] 
**permissions** | [**List[GoogleChecksReportV1alphaDataMonitoringPermissionResult]**](GoogleChecksReportV1alphaDataMonitoringPermissionResult.md) | Permissions that your app uses. | [optional] 
**sdks** | [**List[GoogleChecksReportV1alphaDataMonitoringSdkResult]**](GoogleChecksReportV1alphaDataMonitoringSdkResult.md) | SDKs that your app uses. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_data_monitoring import GoogleChecksReportV1alphaDataMonitoring

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaDataMonitoring from a JSON string
google_checks_report_v1alpha_data_monitoring_instance = GoogleChecksReportV1alphaDataMonitoring.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaDataMonitoring.to_json())

# convert the object into a dict
google_checks_report_v1alpha_data_monitoring_dict = google_checks_report_v1alpha_data_monitoring_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaDataMonitoring from a dict
google_checks_report_v1alpha_data_monitoring_from_dict = GoogleChecksReportV1alphaDataMonitoring.from_dict(google_checks_report_v1alpha_data_monitoring_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


