# GoogleChromeManagementV1NetworkBandwidthReport

Network bandwidth report. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_speed_kbps** | **str** | Output only. Download speed in kilobits per second. | [optional] [readonly] 
**report_time** | **str** | Output only. Timestamp of when the report was collected. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_network_bandwidth_report import GoogleChromeManagementV1NetworkBandwidthReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1NetworkBandwidthReport from a JSON string
google_chrome_management_v1_network_bandwidth_report_instance = GoogleChromeManagementV1NetworkBandwidthReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1NetworkBandwidthReport.to_json())

# convert the object into a dict
google_chrome_management_v1_network_bandwidth_report_dict = google_chrome_management_v1_network_bandwidth_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1NetworkBandwidthReport from a dict
google_chrome_management_v1_network_bandwidth_report_from_dict = GoogleChromeManagementV1NetworkBandwidthReport.from_dict(google_chrome_management_v1_network_bandwidth_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


