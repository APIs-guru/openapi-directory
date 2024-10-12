# GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue

Value of traffic filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.md) |  | 
**protocol** | **str** | Protocol of &#39;custom&#39; type traffic filter. Must be one of: &#39;tcp&#39;, &#39;udp&#39;, &#39;icmp6&#39; or &#39;any&#39; | [optional] 
**source** | [**GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource**](GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource.md) |  | 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value import GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue from a JSON string
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_instance = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_dict = get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue from a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_from_dict = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue.from_dict(get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


