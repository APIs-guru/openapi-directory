# GoogleChromeManagementV1DeviceHardwareCountReport

Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Public name of the hardware specification. | [optional] 
**count** | **str** | Count of devices with a unique hardware specification. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_device_hardware_count_report import GoogleChromeManagementV1DeviceHardwareCountReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1DeviceHardwareCountReport from a JSON string
google_chrome_management_v1_device_hardware_count_report_instance = GoogleChromeManagementV1DeviceHardwareCountReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1DeviceHardwareCountReport.to_json())

# convert the object into a dict
google_chrome_management_v1_device_hardware_count_report_dict = google_chrome_management_v1_device_hardware_count_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1DeviceHardwareCountReport from a dict
google_chrome_management_v1_device_hardware_count_report_from_dict = GoogleChromeManagementV1DeviceHardwareCountReport.from_dict(google_chrome_management_v1_device_hardware_count_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


