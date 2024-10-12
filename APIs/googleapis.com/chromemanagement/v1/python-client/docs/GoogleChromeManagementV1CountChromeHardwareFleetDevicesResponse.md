# GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse

Response containing a list of devices with a specific type of hardware specification from the requested hardware type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_reports** | [**List[GoogleChromeManagementV1DeviceHardwareCountReport]**](GoogleChromeManagementV1DeviceHardwareCountReport.md) | The DeviceHardwareCountReport for device cpu type (for example Intel(R) Core(TM) i7-10610U CPU @ 1.80GHz). | [optional] 
**memory_reports** | [**List[GoogleChromeManagementV1DeviceHardwareCountReport]**](GoogleChromeManagementV1DeviceHardwareCountReport.md) | The DeviceHardwareCountReport for device memory amount in gigabytes (for example 16). | [optional] 
**model_reports** | [**List[GoogleChromeManagementV1DeviceHardwareCountReport]**](GoogleChromeManagementV1DeviceHardwareCountReport.md) | The DeviceHardwareCountReport for device model type (for example Acer C7 Chromebook). | [optional] 
**storage_reports** | [**List[GoogleChromeManagementV1DeviceHardwareCountReport]**](GoogleChromeManagementV1DeviceHardwareCountReport.md) | The DeviceHardwareCountReport for device storage amount in gigabytes (for example 128). | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_count_chrome_hardware_fleet_devices_response import GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse from a JSON string
google_chrome_management_v1_count_chrome_hardware_fleet_devices_response_instance = GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_count_chrome_hardware_fleet_devices_response_dict = google_chrome_management_v1_count_chrome_hardware_fleet_devices_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse from a dict
google_chrome_management_v1_count_chrome_hardware_fleet_devices_response_from_dict = GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse.from_dict(google_chrome_management_v1_count_chrome_hardware_fleet_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


