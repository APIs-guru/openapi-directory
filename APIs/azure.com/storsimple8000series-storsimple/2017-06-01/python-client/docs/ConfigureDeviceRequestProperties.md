# ConfigureDeviceRequestProperties

The properties of the configure device request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_device_name** | **str** | The current name of the device. | 
**dns_settings** | [**SecondaryDNSSettings**](SecondaryDNSSettings.md) |  | [optional] 
**friendly_name** | **str** | The friendly name for the device. | 
**network_interface_data0_settings** | [**NetworkInterfaceData0Settings**](NetworkInterfaceData0Settings.md) |  | [optional] 
**time_zone** | **str** | The device time zone. For eg: \&quot;Pacific Standard Time\&quot; | 

## Example

```python
from openapi_client.models.configure_device_request_properties import ConfigureDeviceRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigureDeviceRequestProperties from a JSON string
configure_device_request_properties_instance = ConfigureDeviceRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ConfigureDeviceRequestProperties.to_json())

# convert the object into a dict
configure_device_request_properties_dict = configure_device_request_properties_instance.to_dict()
# create an instance of ConfigureDeviceRequestProperties from a dict
configure_device_request_properties_from_dict = ConfigureDeviceRequestProperties.from_dict(configure_device_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


