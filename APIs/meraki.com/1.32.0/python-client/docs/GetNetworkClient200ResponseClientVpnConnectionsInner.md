# GetNetworkClient200ResponseClientVpnConnectionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected_at** | **int** | The time the client last connected to the VPN | [optional] 
**disconnected_at** | **int** | The time the client last disconnectd from the VPN | [optional] 
**remote_ip** | **str** | The IP address of the VPN the client last connected to | [optional] 

## Example

```python
from openapi_client.models.get_network_client200_response_client_vpn_connections_inner import GetNetworkClient200ResponseClientVpnConnectionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkClient200ResponseClientVpnConnectionsInner from a JSON string
get_network_client200_response_client_vpn_connections_inner_instance = GetNetworkClient200ResponseClientVpnConnectionsInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkClient200ResponseClientVpnConnectionsInner.to_json())

# convert the object into a dict
get_network_client200_response_client_vpn_connections_inner_dict = get_network_client200_response_client_vpn_connections_inner_instance.to_dict()
# create an instance of GetNetworkClient200ResponseClientVpnConnectionsInner from a dict
get_network_client200_response_client_vpn_connections_inner_from_dict = GetNetworkClient200ResponseClientVpnConnectionsInner.from_dict(get_network_client200_response_client_vpn_connections_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


