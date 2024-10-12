# GoogleChromeManagementV1TelemetryEvent

Telemetry data reported by a managed device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_severe_underrun_event** | **object** | &#x60;TelemetryAudioSevereUnderrunEvent&#x60; is triggered when a audio devices run out of buffer data for more than 5 seconds. * Granular permission needed: TELEMETRY_API_AUDIO_REPORT | [optional] 
**device** | [**GoogleChromeManagementV1TelemetryDeviceInfo**](GoogleChromeManagementV1TelemetryDeviceInfo.md) |  | [optional] 
**event_type** | **str** | The event type of the current event. | [optional] 
**https_latency_change_event** | [**GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent**](GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the event. | [optional] [readonly] 
**network_state_change_event** | [**GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent**](GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent.md) |  | [optional] 
**report_time** | **str** | Timestamp that represents when the event was reported. | [optional] 
**usb_peripherals_event** | [**GoogleChromeManagementV1TelemetryUsbPeripheralsEvent**](GoogleChromeManagementV1TelemetryUsbPeripheralsEvent.md) |  | [optional] 
**user** | [**GoogleChromeManagementV1TelemetryUserInfo**](GoogleChromeManagementV1TelemetryUserInfo.md) |  | [optional] 
**vpn_connection_state_change_event** | [**GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent**](GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent.md) |  | [optional] 
**wifi_signal_strength_event** | [**GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent**](GoogleChromeManagementV1TelemetryNetworkSignalStrengthEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_event import GoogleChromeManagementV1TelemetryEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryEvent from a JSON string
google_chrome_management_v1_telemetry_event_instance = GoogleChromeManagementV1TelemetryEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryEvent.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_event_dict = google_chrome_management_v1_telemetry_event_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryEvent from a dict
google_chrome_management_v1_telemetry_event_from_dict = GoogleChromeManagementV1TelemetryEvent.from_dict(google_chrome_management_v1_telemetry_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


