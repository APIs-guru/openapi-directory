# GetNetworkClients200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adaptive_policy_group** | **str** | The adaptive policy group of the client | [optional] 
**description** | **str** | Short description of the client | [optional] 
**device_type_prediction** | **str** | Prediction of the client&#39;s device type | [optional] 
**first_seen** | **int** | Timestamp client was first seen in the network | [optional] 
**group_policy8021x** | **str** | 802.1x group policy of the client | [optional] 
**id** | **str** | The ID of the client | [optional] 
**ip** | **str** | The IP address of the client | [optional] 
**ip6** | **str** | The IPv6 address of the client | [optional] 
**ip6_local** | **str** | Local IPv6 address of the client | [optional] 
**last_seen** | **int** | Timestamp client was last seen in the network | [optional] 
**mac** | **str** | The MAC address of the client | [optional] 
**manufacturer** | **str** | Manufacturer of the client | [optional] 
**named_vlan** | **str** | Named VLAN of the client | [optional] 
**notes** | **str** | Notes on the client | [optional] 
**os** | **str** | The operating system of the client | [optional] 
**recent_device_connection** | **str** | Client&#39;s most recent connection type | [optional] 
**recent_device_mac** | **str** | The MAC address of the node that the device was last connected to | [optional] 
**recent_device_name** | **str** | The name of the node the device was last connected to | [optional] 
**recent_device_serial** | **str** | The serial of the node the device was last connected to | [optional] 
**sm_installed** | **bool** | Status of SM for the client | [optional] 
**ssid** | **str** | The name of the SSID that the client is connected to | [optional] 
**status** | **str** | The connection status of the client | [optional] 
**switchport** | **str** | The switch port that the client is connected to | [optional] 
**usage** | [**GetNetworkClients200ResponseUsage**](GetNetworkClients200ResponseUsage.md) |  | [optional] 
**user** | **str** | The username of the user of the client | [optional] 
**vlan** | **str** | The name of the VLAN that the client is connected to | [optional] 
**wireless_capabilities** | **str** | Wireless capabilities of the client | [optional] 

## Example

```python
from openapi_client.models.get_network_clients200_response import GetNetworkClients200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkClients200Response from a JSON string
get_network_clients200_response_instance = GetNetworkClients200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkClients200Response.to_json())

# convert the object into a dict
get_network_clients200_response_dict = get_network_clients200_response_instance.to_dict()
# create an instance of GetNetworkClients200Response from a dict
get_network_clients200_response_from_dict = GetNetworkClients200Response.from_dict(get_network_clients200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


