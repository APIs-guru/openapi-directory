# GetDeviceSwitchPortsStatuses200ResponseInnerCdp

The Cisco Discovery Protocol (CDP) information of the connected device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Contains network addresses of both receiving and sending devices. | [optional] 
**capabilities** | **str** | Identifies the device type, which indicates the functional capabilities of the device. | [optional] 
**device_id** | **str** | Identifies the device name. | [optional] 
**management_address** | **str** | The device&#39;s management IP. | [optional] 
**native_vlan** | **int** | Indicates, per interface, the assumed VLAN for untagged packets on the interface. | [optional] 
**platform** | **str** | Identifies the hardware platform of the device. | [optional] 
**port_id** | **str** | Identifies the port from which the CDP packet was sent. | [optional] 
**system_name** | **str** | The system name. | [optional] 
**version** | **str** | Contains the device software release information. | [optional] 
**vtp_management_domain** | **str** | Advertises the configured VLAN Trunking Protocl (VTP)-management-domain name of the system. | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_ports_statuses200_response_inner_cdp import GetDeviceSwitchPortsStatuses200ResponseInnerCdp

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerCdp from a JSON string
get_device_switch_ports_statuses200_response_inner_cdp_instance = GetDeviceSwitchPortsStatuses200ResponseInnerCdp.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchPortsStatuses200ResponseInnerCdp.to_json())

# convert the object into a dict
get_device_switch_ports_statuses200_response_inner_cdp_dict = get_device_switch_ports_statuses200_response_inner_cdp_instance.to_dict()
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerCdp from a dict
get_device_switch_ports_statuses200_response_inner_cdp_from_dict = GetDeviceSwitchPortsStatuses200ResponseInnerCdp.from_dict(get_device_switch_ports_statuses200_response_inner_cdp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


