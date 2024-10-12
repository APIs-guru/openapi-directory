# HardwareStatus

Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**battery_temperatures** | **List[float]** | Current battery temperatures in Celsius for each battery on the device. | [optional] 
**cpu_temperatures** | **List[float]** | Current CPU temperatures in Celsius for each CPU on the device. | [optional] 
**cpu_usages** | **List[float]** | CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system. | [optional] 
**create_time** | **str** | The time the measurements were taken. | [optional] 
**fan_speeds** | **List[float]** | Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system. | [optional] 
**gpu_temperatures** | **List[float]** | Current GPU temperatures in Celsius for each GPU on the device. | [optional] 
**skin_temperatures** | **List[float]** | Current device skin temperatures in Celsius. | [optional] 

## Example

```python
from openapi_client.models.hardware_status import HardwareStatus

# TODO update the JSON string below
json = "{}"
# create an instance of HardwareStatus from a JSON string
hardware_status_instance = HardwareStatus.from_json(json)
# print the JSON string representation of the object
print(HardwareStatus.to_json())

# convert the object into a dict
hardware_status_dict = hardware_status_instance.to_dict()
# create an instance of HardwareStatus from a dict
hardware_status_from_dict = HardwareStatus.from_dict(hardware_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


