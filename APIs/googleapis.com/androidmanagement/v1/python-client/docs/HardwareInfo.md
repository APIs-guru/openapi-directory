# HardwareInfo

Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**battery_shutdown_temperatures** | **List[float]** | Battery shutdown temperature thresholds in Celsius for each battery on the device. | [optional] 
**battery_throttling_temperatures** | **List[float]** | Battery throttling temperature thresholds in Celsius for each battery on the device. | [optional] 
**brand** | **str** | Brand of the device. For example, Google. | [optional] 
**cpu_shutdown_temperatures** | **List[float]** | CPU shutdown temperature thresholds in Celsius for each CPU on the device. | [optional] 
**cpu_throttling_temperatures** | **List[float]** | CPU throttling temperature thresholds in Celsius for each CPU on the device. | [optional] 
**device_baseband_version** | **str** | Baseband version. For example, MDM9625_104662.22.05.34p. | [optional] 
**enterprise_specific_id** | **str** | Output only. ID that uniquely identifies a personally-owned device in a particular organization. On the same physical device when enrolled with the same organization, this ID persists across setups and even factory resets. This ID is available on personally-owned devices with a work profile on devices running Android 12 and above. | [optional] [readonly] 
**gpu_shutdown_temperatures** | **List[float]** | GPU shutdown temperature thresholds in Celsius for each GPU on the device. | [optional] 
**gpu_throttling_temperatures** | **List[float]** | GPU throttling temperature thresholds in Celsius for each GPU on the device. | [optional] 
**hardware** | **str** | Name of the hardware. For example, Angler. | [optional] 
**manufacturer** | **str** | Manufacturer. For example, Motorola. | [optional] 
**model** | **str** | The model of the device. For example, Asus Nexus 7. | [optional] 
**serial_number** | **str** | The device serial number. | [optional] 
**skin_shutdown_temperatures** | **List[float]** | Device skin shutdown temperature thresholds in Celsius. | [optional] 
**skin_throttling_temperatures** | **List[float]** | Device skin throttling temperature thresholds in Celsius. | [optional] 

## Example

```python
from openapi_client.models.hardware_info import HardwareInfo

# TODO update the JSON string below
json = "{}"
# create an instance of HardwareInfo from a JSON string
hardware_info_instance = HardwareInfo.from_json(json)
# print the JSON string representation of the object
print(HardwareInfo.to_json())

# convert the object into a dict
hardware_info_dict = hardware_info_instance.to_dict()
# create an instance of HardwareInfo from a dict
hardware_info_from_dict = HardwareInfo.from_dict(hardware_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


