# GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination

Destination of 'custom' type traffic filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr** | **str** | CIDR format address (e.g.\&quot;192.168.10.1\&quot;, which is the same as \&quot;192.168.10.1/32\&quot;), or \&quot;any\&quot;. Cannot be used in combination with the \&quot;vlan\&quot; or \&quot;fqdn\&quot; property | [optional] 
**fqdn** | **str** | FQDN format address. Cannot be used in combination with the \&quot;cidr\&quot; or \&quot;fqdn\&quot; property and is currently only available in the \&quot;destination\&quot; object of the \&quot;vpnTrafficUplinkPreference\&quot; object. E.g.: \&quot;www.google.com\&quot; | [optional] 
**host** | **int** | Host ID in the VLAN. Should not exceed the VLAN subnet capacity. Must be used along with the \&quot;vlan\&quot; property and is currently only available under a template network. | [optional] 
**network** | **str** | Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: \&quot;L_12345678\&quot;. | [optional] 
**port** | **str** | E.g.: \&quot;any\&quot;, \&quot;0\&quot; (also means \&quot;any\&quot;), \&quot;8080\&quot;, \&quot;1-1024\&quot; | [optional] 
**vlan** | **int** | VLAN ID of the configured VLAN in the Meraki network. Cannot be used in combination with the \&quot;cidr\&quot; or \&quot;fqdn\&quot; property and is currently only available under a template network. | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination import GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination from a JSON string
get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_instance = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_dict = get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination from a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_from_dict = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.from_dict(get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


