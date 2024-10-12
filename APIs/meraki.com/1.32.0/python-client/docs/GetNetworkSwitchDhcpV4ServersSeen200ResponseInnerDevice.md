# GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDevice

Attributes of the server when it's a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interface** | [**GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDeviceInterface**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDeviceInterface.md) |  | [optional] 
**name** | **str** | Device name. | [optional] 
**serial** | **str** | Device serial. | [optional] 
**url** | **str** | Url link to device. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner_device import GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDevice from a JSON string
get_network_switch_dhcp_v4_servers_seen200_response_inner_device_instance = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDevice.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDevice.to_json())

# convert the object into a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_device_dict = get_network_switch_dhcp_v4_servers_seen200_response_inner_device_instance.to_dict()
# create an instance of GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDevice from a dict
get_network_switch_dhcp_v4_servers_seen200_response_inner_device_from_dict = GetNetworkSwitchDhcpV4ServersSeen200ResponseInnerDevice.from_dict(get_network_switch_dhcp_v4_servers_seen200_response_inner_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


