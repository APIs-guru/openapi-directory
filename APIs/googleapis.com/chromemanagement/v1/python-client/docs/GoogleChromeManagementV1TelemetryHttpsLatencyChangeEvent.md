# GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent

Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**https_latency_routine_data** | [**GoogleChromeManagementV1HttpsLatencyRoutineData**](GoogleChromeManagementV1HttpsLatencyRoutineData.md) |  | [optional] 
**https_latency_state** | **str** | Current HTTPS latency state. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_https_latency_change_event import GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent from a JSON string
google_chrome_management_v1_telemetry_https_latency_change_event_instance = GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_https_latency_change_event_dict = google_chrome_management_v1_telemetry_https_latency_change_event_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent from a dict
google_chrome_management_v1_telemetry_https_latency_change_event_from_dict = GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent.from_dict(google_chrome_management_v1_telemetry_https_latency_change_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


