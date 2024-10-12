# GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent

`TelemetryNetworkSignalStrengthEvent` is triggered on WiFi signal strength events. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **str** | Unique identifier of the network. | [optional] 
**signal_strength_dbm** | **int** | Signal strength RSSI value. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_network_signal_strength_event import GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent from a JSON string
google_chrome_management_v1_telemetry_network_signal_strength_event_instance = GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_network_signal_strength_event_dict = google_chrome_management_v1_telemetry_network_signal_strength_event_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent from a dict
google_chrome_management_v1_telemetry_network_signal_strength_event_from_dict = GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent.from_dict(google_chrome_management_v1_telemetry_network_signal_strength_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


