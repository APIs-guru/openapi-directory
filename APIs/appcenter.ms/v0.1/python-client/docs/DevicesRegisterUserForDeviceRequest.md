# DevicesRegisterUserForDeviceRequest

The information for a single iOS device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imei** | **str** | The device&#39;s International Mobile Equipment Identity number. Always empty or undefined at present. | [optional] 
**model** | **str** | The model identifier of the device, in the format iDeviceM,N | 
**os_build** | **str** | The build number of the last known OS version running on the device | [optional] 
**os_version** | **str** | The last known OS version running on the device | [optional] 
**owner_id** | **str** | The user ID of the device owner. | [optional] 
**serial** | **str** | The device&#39;s serial number. Always empty or undefined at present. | [optional] 
**udid** | **str** | The Unique Device IDentifier of the device | 

## Example

```python
from openapi_client.models.devices_register_user_for_device_request import DevicesRegisterUserForDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DevicesRegisterUserForDeviceRequest from a JSON string
devices_register_user_for_device_request_instance = DevicesRegisterUserForDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(DevicesRegisterUserForDeviceRequest.to_json())

# convert the object into a dict
devices_register_user_for_device_request_dict = devices_register_user_for_device_request_instance.to_dict()
# create an instance of DevicesRegisterUserForDeviceRequest from a dict
devices_register_user_for_device_request_from_dict = DevicesRegisterUserForDeviceRequest.from_dict(devices_register_user_for_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


