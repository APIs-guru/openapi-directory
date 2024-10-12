# GoogleChecksReportV1alphaDataMonitoringDataTypeResult

Information about a data type that was found in your app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The data type that was shared or collected by your app. | [optional] 
**data_type_evidence** | [**GoogleChecksReportV1alphaDataTypeEvidence**](GoogleChecksReportV1alphaDataTypeEvidence.md) |  | [optional] 
**metadata** | [**GoogleChecksReportV1alphaDataMonitoringResultMetadata**](GoogleChecksReportV1alphaDataMonitoringResultMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_data_monitoring_data_type_result import GoogleChecksReportV1alphaDataMonitoringDataTypeResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaDataMonitoringDataTypeResult from a JSON string
google_checks_report_v1alpha_data_monitoring_data_type_result_instance = GoogleChecksReportV1alphaDataMonitoringDataTypeResult.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaDataMonitoringDataTypeResult.to_json())

# convert the object into a dict
google_checks_report_v1alpha_data_monitoring_data_type_result_dict = google_checks_report_v1alpha_data_monitoring_data_type_result_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaDataMonitoringDataTypeResult from a dict
google_checks_report_v1alpha_data_monitoring_data_type_result_from_dict = GoogleChecksReportV1alphaDataMonitoringDataTypeResult.from_dict(google_checks_report_v1alpha_data_monitoring_data_type_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


