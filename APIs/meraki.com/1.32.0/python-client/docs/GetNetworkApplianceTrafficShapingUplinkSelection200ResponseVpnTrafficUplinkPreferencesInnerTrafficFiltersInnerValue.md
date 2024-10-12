# GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValue

Value of traffic filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.md) |  | [optional] 
**id** | **str** | ID of &#39;applicationCategory&#39; or &#39;application&#39; type traffic filter | [optional] 
**protocol** | **str** | Protocol of &#39;custom&#39; type traffic filter. Must be one of: &#39;tcp&#39;, &#39;udp&#39;, &#39;icmp&#39;, &#39;icmp6&#39; or &#39;any&#39; | [optional] 
**source** | [**GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value import GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValue

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValue from a JSON string
get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_instance = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValue.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValue.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_dict = get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValue from a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_from_dict = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInnerValue.from_dict(get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_traffic_filters_inner_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


