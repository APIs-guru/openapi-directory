# GetNetworkWirelessFailedConnections200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_mac** | **str** | Client Mac | [optional] 
**failure_step** | **str** | The failed onboarding step. One of: assoc, auth, dhcp, dns. | [optional] 
**serial** | **str** | Serial Number | [optional] 
**ssid_number** | **int** | SSID Number | [optional] 
**ts** | **datetime** | The timestamp when the client mac failed | [optional] 
**type** | **str** | The failure type in the onboarding step | [optional] 
**vlan** | **int** | LAN | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_failed_connections200_response_inner import GetNetworkWirelessFailedConnections200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessFailedConnections200ResponseInner from a JSON string
get_network_wireless_failed_connections200_response_inner_instance = GetNetworkWirelessFailedConnections200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessFailedConnections200ResponseInner.to_json())

# convert the object into a dict
get_network_wireless_failed_connections200_response_inner_dict = get_network_wireless_failed_connections200_response_inner_instance.to_dict()
# create an instance of GetNetworkWirelessFailedConnections200ResponseInner from a dict
get_network_wireless_failed_connections200_response_inner_from_dict = GetNetworkWirelessFailedConnections200ResponseInner.from_dict(get_network_wireless_failed_connections200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


