# DeviceInfoResponse

The information for a single iOS device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_name** | **str** | The device description, in the format \&quot;iPhone 7 Plus (A1784)\&quot; | 
**full_device_name** | **str** | A combination of the device model name and the owner name. | [optional] 
**imei** | **str** | The device&#39;s International Mobile Equipment Identity number. Always empty or undefined at present. | [optional] 
**model** | **str** | The model identifier of the device, in the format iDeviceM,N | 
**os_build** | **str** | The last known OS version running on the device | 
**os_version** | **str** | The last known OS version running on the device | 
**owner_id** | **str** | The user ID of the device owner. | [optional] 
**registered_at** | **str** | Timestamp of when the device was registered in ISO format. | [optional] 
**serial** | **str** | The device&#39;s serial number. Always empty or undefined at present. | [optional] 
**status** | **str** | The provisioning status of the device. | 
**udid** | **str** | The Unique Device IDentifier of the device | 

## Example

```python
from openapi_client.models.device_info_response import DeviceInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceInfoResponse from a JSON string
device_info_response_instance = DeviceInfoResponse.from_json(json)
# print the JSON string representation of the object
print(DeviceInfoResponse.to_json())

# convert the object into a dict
device_info_response_dict = device_info_response_instance.to_dict()
# create an instance of DeviceInfoResponse from a dict
device_info_response_from_dict = DeviceInfoResponse.from_dict(device_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


