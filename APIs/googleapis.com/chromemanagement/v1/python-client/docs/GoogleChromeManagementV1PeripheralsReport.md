# GoogleChromeManagementV1PeripheralsReport

Peripherals report. * Granular permission needed: TELEMETRY_API_PERIPHERALS_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_time** | **str** | Output only. Timestamp of when the report was collected. | [optional] [readonly] 
**usb_peripheral_report** | [**List[GoogleChromeManagementV1UsbPeripheralReport]**](GoogleChromeManagementV1UsbPeripheralReport.md) | Reports of all usb connected devices. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_peripherals_report import GoogleChromeManagementV1PeripheralsReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1PeripheralsReport from a JSON string
google_chrome_management_v1_peripherals_report_instance = GoogleChromeManagementV1PeripheralsReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1PeripheralsReport.to_json())

# convert the object into a dict
google_chrome_management_v1_peripherals_report_dict = google_chrome_management_v1_peripherals_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1PeripheralsReport from a dict
google_chrome_management_v1_peripherals_report_from_dict = GoogleChromeManagementV1PeripheralsReport.from_dict(google_chrome_management_v1_peripherals_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


