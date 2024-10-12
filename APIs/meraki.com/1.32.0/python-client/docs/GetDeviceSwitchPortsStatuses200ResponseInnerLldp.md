# GetDeviceSwitchPortsStatuses200ResponseInnerLldp

The Link Layer Discovery Protocol (LLDP) information of the connected device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chassis_id** | **str** | The device&#39;s chassis ID. | [optional] 
**management_address** | **str** | The device&#39;s management IP. | [optional] 
**management_vlan** | **int** | The device&#39;s management VLAN. | [optional] 
**port_description** | **str** | Description of the port from which the LLDP packet was sent. | [optional] 
**port_id** | **str** | Identifies the port from which the LLDP packet was sent | [optional] 
**port_vlan** | **int** | The port&#39;s VLAN. | [optional] 
**system_capabilities** | **str** | Identifies the device type, which indicates the functional capabilities of the device. | [optional] 
**system_description** | **str** | The device&#39;s system description. | [optional] 
**system_name** | **str** | The device&#39;s system name. | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_ports_statuses200_response_inner_lldp import GetDeviceSwitchPortsStatuses200ResponseInnerLldp

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerLldp from a JSON string
get_device_switch_ports_statuses200_response_inner_lldp_instance = GetDeviceSwitchPortsStatuses200ResponseInnerLldp.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchPortsStatuses200ResponseInnerLldp.to_json())

# convert the object into a dict
get_device_switch_ports_statuses200_response_inner_lldp_dict = get_device_switch_ports_statuses200_response_inner_lldp_instance.to_dict()
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerLldp from a dict
get_device_switch_ports_statuses200_response_inner_lldp_from_dict = GetDeviceSwitchPortsStatuses200ResponseInnerLldp.from_dict(get_device_switch_ports_statuses200_response_inner_lldp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


