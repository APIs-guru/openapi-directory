# CycleDeviceSwitchPortsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ports** | **List[str]** | List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8] | 

## Example

```python
from openapi_client.models.cycle_device_switch_ports_request import CycleDeviceSwitchPortsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CycleDeviceSwitchPortsRequest from a JSON string
cycle_device_switch_ports_request_instance = CycleDeviceSwitchPortsRequest.from_json(json)
# print the JSON string representation of the object
print(CycleDeviceSwitchPortsRequest.to_json())

# convert the object into a dict
cycle_device_switch_ports_request_dict = cycle_device_switch_ports_request_instance.to_dict()
# create an instance of CycleDeviceSwitchPortsRequest from a dict
cycle_device_switch_ports_request_from_dict = CycleDeviceSwitchPortsRequest.from_dict(cycle_device_switch_ports_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


