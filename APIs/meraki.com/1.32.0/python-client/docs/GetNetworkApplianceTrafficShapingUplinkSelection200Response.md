# GetNetworkApplianceTrafficShapingUplinkSelection200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_active_auto_vpn_enabled** | **bool** | Whether active-active AutoVPN is enabled | [optional] 
**default_uplink** | **str** | The default uplink. Must be one of: &#39;wan1&#39; or &#39;wan2&#39; | [optional] 
**failover_and_failback** | [**GetNetworkApplianceTrafficShapingUplinkSelection200ResponseFailoverAndFailback**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseFailoverAndFailback.md) |  | [optional] 
**load_balancing_enabled** | **bool** | Whether load balancing is enabled | [optional] 
**vpn_traffic_uplink_preferences** | [**List[GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInner]**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseVpnTrafficUplinkPreferencesInner.md) | Uplink preference rules for VPN traffic | [optional] 
**wan_traffic_uplink_preferences** | [**List[GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInner]**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInner.md) | Uplink preference rules for WAN traffic | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response import GetNetworkApplianceTrafficShapingUplinkSelection200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200Response from a JSON string
get_network_appliance_traffic_shaping_uplink_selection200_response_instance = GetNetworkApplianceTrafficShapingUplinkSelection200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkSelection200Response.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_dict = get_network_appliance_traffic_shaping_uplink_selection200_response_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200Response from a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_from_dict = GetNetworkApplianceTrafficShapingUplinkSelection200Response.from_dict(get_network_appliance_traffic_shaping_uplink_selection200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


