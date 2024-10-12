# GoogleChromeManagementV1NetworkDiagnosticsReport

Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**https_latency_data** | [**GoogleChromeManagementV1HttpsLatencyRoutineData**](GoogleChromeManagementV1HttpsLatencyRoutineData.md) |  | [optional] 
**report_time** | **str** | Output only. Timestamp of when the diagnostics were collected. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_network_diagnostics_report import GoogleChromeManagementV1NetworkDiagnosticsReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1NetworkDiagnosticsReport from a JSON string
google_chrome_management_v1_network_diagnostics_report_instance = GoogleChromeManagementV1NetworkDiagnosticsReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1NetworkDiagnosticsReport.to_json())

# convert the object into a dict
google_chrome_management_v1_network_diagnostics_report_dict = google_chrome_management_v1_network_diagnostics_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1NetworkDiagnosticsReport from a dict
google_chrome_management_v1_network_diagnostics_report_from_dict = GoogleChromeManagementV1NetworkDiagnosticsReport.from_dict(google_chrome_management_v1_network_diagnostics_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


