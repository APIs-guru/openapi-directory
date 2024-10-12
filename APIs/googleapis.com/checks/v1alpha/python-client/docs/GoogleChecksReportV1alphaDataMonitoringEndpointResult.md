# GoogleChecksReportV1alphaDataMonitoringEndpointResult

Information about an endpoint that was contacted by your app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | [**GoogleChecksReportV1alphaEndpoint**](GoogleChecksReportV1alphaEndpoint.md) |  | [optional] 
**hit_count** | **int** | The number of times this endpoint was contacted by your app. | [optional] 
**metadata** | [**GoogleChecksReportV1alphaDataMonitoringResultMetadata**](GoogleChecksReportV1alphaDataMonitoringResultMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_data_monitoring_endpoint_result import GoogleChecksReportV1alphaDataMonitoringEndpointResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaDataMonitoringEndpointResult from a JSON string
google_checks_report_v1alpha_data_monitoring_endpoint_result_instance = GoogleChecksReportV1alphaDataMonitoringEndpointResult.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaDataMonitoringEndpointResult.to_json())

# convert the object into a dict
google_checks_report_v1alpha_data_monitoring_endpoint_result_dict = google_checks_report_v1alpha_data_monitoring_endpoint_result_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaDataMonitoringEndpointResult from a dict
google_checks_report_v1alpha_data_monitoring_endpoint_result_from_dict = GoogleChecksReportV1alphaDataMonitoringEndpointResult.from_dict(google_checks_report_v1alpha_data_monitoring_endpoint_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


