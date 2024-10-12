# GoogleChromeManagementV1TelemetryUsbPeripheralsEvent

`TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usb_peripheral_report** | [**List[GoogleChromeManagementV1UsbPeripheralReport]**](GoogleChromeManagementV1UsbPeripheralReport.md) | List of usb devices that were either added or removed. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_usb_peripherals_event import GoogleChromeManagementV1TelemetryUsbPeripheralsEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryUsbPeripheralsEvent from a JSON string
google_chrome_management_v1_telemetry_usb_peripherals_event_instance = GoogleChromeManagementV1TelemetryUsbPeripheralsEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryUsbPeripheralsEvent.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_usb_peripherals_event_dict = google_chrome_management_v1_telemetry_usb_peripherals_event_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryUsbPeripheralsEvent from a dict
google_chrome_management_v1_telemetry_usb_peripherals_event_from_dict = GoogleChromeManagementV1TelemetryUsbPeripheralsEvent.from_dict(google_chrome_management_v1_telemetry_usb_peripherals_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


