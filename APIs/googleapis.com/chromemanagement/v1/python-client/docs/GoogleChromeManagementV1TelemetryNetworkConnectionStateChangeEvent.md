# GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent

`TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_state** | **str** | Current connection state of the network. | [optional] 
**guid** | **str** | Unique identifier of the network. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_network_connection_state_change_event import GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent from a JSON string
google_chrome_management_v1_telemetry_network_connection_state_change_event_instance = GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_network_connection_state_change_event_dict = google_chrome_management_v1_telemetry_network_connection_state_change_event_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent from a dict
google_chrome_management_v1_telemetry_network_connection_state_change_event_from_dict = GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent.from_dict(google_chrome_management_v1_telemetry_network_connection_state_change_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


