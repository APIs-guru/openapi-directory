# GoogleChecksReportV1alphaDataMonitoringResultMetadata

Information about a data monitoring result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badges** | **List[str]** | Badges that apply to this result. | [optional] 
**first_detected_time** | **str** | The timestamp when this result was first detected within the last 8 weeks. If not set, it wasn&#39;t detected within the last 8 weeks. | [optional] 
**last_detected_app_version** | **str** | Your app&#39;s version name when this result was last detected within the last 8 weeks. If not set, it wasn&#39;t detected within the last 8 weeks. | [optional] 
**last_detected_time** | **str** | The timestamp when this result was last detected within the last 8 weeks. If not set, it wasn&#39;t detected within the last 8 weeks. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_data_monitoring_result_metadata import GoogleChecksReportV1alphaDataMonitoringResultMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaDataMonitoringResultMetadata from a JSON string
google_checks_report_v1alpha_data_monitoring_result_metadata_instance = GoogleChecksReportV1alphaDataMonitoringResultMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaDataMonitoringResultMetadata.to_json())

# convert the object into a dict
google_checks_report_v1alpha_data_monitoring_result_metadata_dict = google_checks_report_v1alpha_data_monitoring_result_metadata_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaDataMonitoringResultMetadata from a dict
google_checks_report_v1alpha_data_monitoring_result_metadata_from_dict = GoogleChecksReportV1alphaDataMonitoringResultMetadata.from_dict(google_checks_report_v1alpha_data_monitoring_result_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


