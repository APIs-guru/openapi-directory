# GoogleChromeManagementV1NetworkStatusReport

State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes * Granular permission needed: TELEMETRY_API_NETWORK_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_state** | **str** | Output only. Current connection state of the network. | [optional] [readonly] 
**connection_type** | **str** | Output only. Network connection type. | [optional] [readonly] 
**encryption_on** | **bool** | Output only. Whether the wifi encryption key is turned off. | [optional] [readonly] 
**gateway_ip_address** | **str** | Output only. Gateway IP address. | [optional] [readonly] 
**guid** | **str** | Output only. Network connection guid. | [optional] [readonly] 
**lan_ip_address** | **str** | Output only. LAN IP address. | [optional] [readonly] 
**receiving_bit_rate_mbps** | **str** | Output only. Receiving bit rate measured in Megabits per second. | [optional] [readonly] 
**report_time** | **str** | Output only. Time at which the network state was reported. | [optional] [readonly] 
**sample_frequency** | **str** | Output only. Frequency the report is sampled. | [optional] [readonly] 
**signal_strength_dbm** | **int** | Output only. Signal strength for wireless networks measured in decibels. | [optional] [readonly] 
**transmission_bit_rate_mbps** | **str** | Output only. Transmission bit rate measured in Megabits per second. | [optional] [readonly] 
**transmission_power_dbm** | **int** | Output only. Transmission power measured in decibels. | [optional] [readonly] 
**wifi_link_quality** | **str** | Output only. Wifi link quality. Value ranges from [0, 70]. 0 indicates no signal and 70 indicates a strong signal. | [optional] [readonly] 
**wifi_power_management_enabled** | **bool** | Output only. Wifi power management enabled | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_network_status_report import GoogleChromeManagementV1NetworkStatusReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1NetworkStatusReport from a JSON string
google_chrome_management_v1_network_status_report_instance = GoogleChromeManagementV1NetworkStatusReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1NetworkStatusReport.to_json())

# convert the object into a dict
google_chrome_management_v1_network_status_report_dict = google_chrome_management_v1_network_status_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1NetworkStatusReport from a dict
google_chrome_management_v1_network_status_report_from_dict = GoogleChromeManagementV1NetworkStatusReport.from_dict(google_chrome_management_v1_network_status_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


