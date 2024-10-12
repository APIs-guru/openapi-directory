# GoogleChecksReportV1alphaDataMonitoringSdkResult

Information about an SDK that was found in your app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**GoogleChecksReportV1alphaDataMonitoringResultMetadata**](GoogleChecksReportV1alphaDataMonitoringResultMetadata.md) |  | [optional] 
**sdk** | [**GoogleChecksReportV1alphaSdk**](GoogleChecksReportV1alphaSdk.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_data_monitoring_sdk_result import GoogleChecksReportV1alphaDataMonitoringSdkResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaDataMonitoringSdkResult from a JSON string
google_checks_report_v1alpha_data_monitoring_sdk_result_instance = GoogleChecksReportV1alphaDataMonitoringSdkResult.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaDataMonitoringSdkResult.to_json())

# convert the object into a dict
google_checks_report_v1alpha_data_monitoring_sdk_result_dict = google_checks_report_v1alpha_data_monitoring_sdk_result_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaDataMonitoringSdkResult from a dict
google_checks_report_v1alpha_data_monitoring_sdk_result_from_dict = GoogleChecksReportV1alphaDataMonitoringSdkResult.from_dict(google_checks_report_v1alpha_data_monitoring_sdk_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


