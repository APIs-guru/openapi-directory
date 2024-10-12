# GetNetworkWirelessSettings200ResponseNamedVlansPoolDhcpMonitoring

Named VLAN Pool DHCP Monitoring settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | The duration in minutes that devices will refrain from using dirty VLANs before adding them back to the pool. | [optional] 
**enabled** | **bool** | Whether or not devices using named VLAN pools should remove dirty VLANs from the pool, thereby preventing clients from being assigned to VLANs where they would be unable to obtain an IP address via DHCP | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_settings200_response_named_vlans_pool_dhcp_monitoring import GetNetworkWirelessSettings200ResponseNamedVlansPoolDhcpMonitoring

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSettings200ResponseNamedVlansPoolDhcpMonitoring from a JSON string
get_network_wireless_settings200_response_named_vlans_pool_dhcp_monitoring_instance = GetNetworkWirelessSettings200ResponseNamedVlansPoolDhcpMonitoring.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSettings200ResponseNamedVlansPoolDhcpMonitoring.to_json())

# convert the object into a dict
get_network_wireless_settings200_response_named_vlans_pool_dhcp_monitoring_dict = get_network_wireless_settings200_response_named_vlans_pool_dhcp_monitoring_instance.to_dict()
# create an instance of GetNetworkWirelessSettings200ResponseNamedVlansPoolDhcpMonitoring from a dict
get_network_wireless_settings200_response_named_vlans_pool_dhcp_monitoring_from_dict = GetNetworkWirelessSettings200ResponseNamedVlansPoolDhcpMonitoring.from_dict(get_network_wireless_settings200_response_named_vlans_pool_dhcp_monitoring_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


