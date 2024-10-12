# GoogleChromeManagementV1UsbPeripheralReport

USB connected peripheral report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | Output only. Categories the device belongs to https://www.usb.org/defined-class-codes | [optional] [readonly] 
**class_id** | **int** | Output only. Class ID https://www.usb.org/defined-class-codes | [optional] [readonly] 
**firmware_version** | **str** | Output only. Firmware version | [optional] [readonly] 
**name** | **str** | Output only. Device name, model name, or product name | [optional] [readonly] 
**pid** | **int** | Output only. Product ID | [optional] [readonly] 
**subclass_id** | **int** | Output only. Subclass ID https://www.usb.org/defined-class-codes | [optional] [readonly] 
**vendor** | **str** | Output only. Vendor name | [optional] [readonly] 
**vid** | **int** | Output only. Vendor ID | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_usb_peripheral_report import GoogleChromeManagementV1UsbPeripheralReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1UsbPeripheralReport from a JSON string
google_chrome_management_v1_usb_peripheral_report_instance = GoogleChromeManagementV1UsbPeripheralReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1UsbPeripheralReport.to_json())

# convert the object into a dict
google_chrome_management_v1_usb_peripheral_report_dict = google_chrome_management_v1_usb_peripheral_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1UsbPeripheralReport from a dict
google_chrome_management_v1_usb_peripheral_report_from_dict = GoogleChromeManagementV1UsbPeripheralReport.from_dict(google_chrome_management_v1_usb_peripheral_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


