# GetNetworkWirelessSettings200ResponseNamedVlans

Named VLAN settings for wireless networks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pool_dhcp_monitoring** | [**GetNetworkWirelessSettings200ResponseNamedVlansPoolDhcpMonitoring**](GetNetworkWirelessSettings200ResponseNamedVlansPoolDhcpMonitoring.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_settings200_response_named_vlans import GetNetworkWirelessSettings200ResponseNamedVlans

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSettings200ResponseNamedVlans from a JSON string
get_network_wireless_settings200_response_named_vlans_instance = GetNetworkWirelessSettings200ResponseNamedVlans.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSettings200ResponseNamedVlans.to_json())

# convert the object into a dict
get_network_wireless_settings200_response_named_vlans_dict = get_network_wireless_settings200_response_named_vlans_instance.to_dict()
# create an instance of GetNetworkWirelessSettings200ResponseNamedVlans from a dict
get_network_wireless_settings200_response_named_vlans_from_dict = GetNetworkWirelessSettings200ResponseNamedVlans.from_dict(get_network_wireless_settings200_response_named_vlans_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


