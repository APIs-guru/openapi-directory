# GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fail_over_criterion** | **str** | Fail over criterion for uplink preference rule. Must be one of: &#39;poorPerformance&#39; or &#39;uplinkDown&#39; | [optional] 
**performance_class** | [**GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerPerformanceClass**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerPerformanceClass.md) |  | [optional] 
**preferred_uplink** | **str** | Preferred uplink for uplink preference rule. Must be one of: &#39;wan1&#39;, &#39;wan2&#39;, &#39;bestForVoIP&#39;, &#39;loadBalancing&#39; or &#39;defaultUplink&#39; | 
**traffic_filters** | [**List[GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInner]**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInnerTrafficFiltersInner.md) | Traffic filters | 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner import GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInner from a JSON string
get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_instance = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInner.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_dict = get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInner from a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_from_dict = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInner.from_dict(get_network_appliance_traffic_shaping_uplink_selection200_response_vpn_traffic_uplink_preferences_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


