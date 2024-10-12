# UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fail_over_criterion** | **str** | Fail over criterion for this uplink preference rule. Must be one of: &#39;poorPerformance&#39; or &#39;uplinkDown&#39; | [optional] 
**performance_class** | [**UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerPerformanceClass**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerPerformanceClass.md) |  | [optional] 
**preferred_uplink** | **str** | Preferred uplink for this uplink preference rule. Must be one of: &#39;wan1&#39;, &#39;wan2&#39;, &#39;bestForVoIP&#39;, &#39;loadBalancing&#39; or &#39;defaultUplink&#39; | 
**traffic_filters** | [**List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerTrafficFiltersInner]**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerTrafficFiltersInner.md) | Array of traffic filters for this uplink preference rule | 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInner from a JSON string
update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_instance = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInner.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_dict = update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInner from a dict
update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_from_dict = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInner.from_dict(update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


