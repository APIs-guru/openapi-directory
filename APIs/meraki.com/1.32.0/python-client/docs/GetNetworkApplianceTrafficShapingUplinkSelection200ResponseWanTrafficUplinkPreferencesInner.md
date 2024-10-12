# GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preferred_uplink** | **str** | Preferred uplink for uplink preference rule. Must be one of: &#39;wan1&#39; or &#39;wan2&#39; | 
**traffic_filters** | [**List[GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInner]**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInner.md) | Traffic filters | 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner import GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInner from a JSON string
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_instance = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInner.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_dict = get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInner from a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_from_dict = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInner.from_dict(get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


