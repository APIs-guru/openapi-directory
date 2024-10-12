# DeviceConnectivityManagement

Covers controls for device connectivity such as Wi-Fi, USB data access, keyboard/mouse connections, and more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configure_wifi** | **str** | Controls Wi-Fi configuring privileges. Based on the option set, user will have either full or limited or no control in configuring Wi-Fi networks. | [optional] 
**tethering_settings** | **str** | Controls tethering settings. Based on the value set, the user is partially or fully disallowed from using different forms of tethering. | [optional] 
**usb_data_access** | **str** | Controls what files and/or data can be transferred via USB. Supported only on company-owned devices. | [optional] 
**wifi_direct_settings** | **str** | Controls configuring and using Wi-Fi direct settings. Supported on company-owned devices running Android 13 and above. | [optional] 

## Example

```python
from openapi_client.models.device_connectivity_management import DeviceConnectivityManagement

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceConnectivityManagement from a JSON string
device_connectivity_management_instance = DeviceConnectivityManagement.from_json(json)
# print the JSON string representation of the object
print(DeviceConnectivityManagement.to_json())

# convert the object into a dict
device_connectivity_management_dict = device_connectivity_management_instance.to_dict()
# create an instance of DeviceConnectivityManagement from a dict
device_connectivity_management_from_dict = DeviceConnectivityManagement.from_dict(device_connectivity_management_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


