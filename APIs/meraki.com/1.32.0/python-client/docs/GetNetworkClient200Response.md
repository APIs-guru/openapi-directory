# GetNetworkClient200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cdp** | **List[List[str]]** | The Cisco discover protocol settings for the client | [optional] 
**client_vpn_connections** | [**List[GetNetworkClient200ResponseClientVpnConnectionsInner]**](GetNetworkClient200ResponseClientVpnConnectionsInner.md) | VPN connections associated with the client | [optional] 
**description** | **str** | Short description of the client | [optional] 
**first_seen** | **int** | Timestamp client was first seen in the network | [optional] 
**id** | **str** | The ID of the client | [optional] 
**ip** | **str** | The IP address of the client | [optional] 
**ip6** | **str** | The IPv6 address of the client | [optional] 
**last_seen** | **int** | Timestamp client was last seen in the network | [optional] 
**lldp** | **List[List[str]]** | The link layer discover protocol settings for the client | [optional] 
**mac** | **str** | The MAC address of the client | [optional] 
**manufacturer** | **str** | Manufacturer of the client | [optional] 
**os** | **str** | The operating system of the client | [optional] 
**recent_device_mac** | **str** | The MAC address of the node that the device was last connected to | [optional] 
**sm_installed** | **bool** | Status of SM for the client | [optional] 
**ssid** | **str** | The name of the SSID that the client is connected to | [optional] 
**status** | **str** | The connection status of the client | [optional] 
**switchport** | **str** | The switch port that the client is connected to | [optional] 
**user** | **str** | The username of the user of the client | [optional] 
**vlan** | **str** | The name of the VLAN that the client is connected to | [optional] 
**wireless_capabilities** | **str** | Wireless capabilities of the client | [optional] 

## Example

```python
from openapi_client.models.get_network_client200_response import GetNetworkClient200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkClient200Response from a JSON string
get_network_client200_response_instance = GetNetworkClient200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkClient200Response.to_json())

# convert the object into a dict
get_network_client200_response_dict = get_network_client200_response_instance.to_dict()
# create an instance of GetNetworkClient200Response from a dict
get_network_client200_response_from_dict = GetNetworkClient200Response.from_dict(get_network_client200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


