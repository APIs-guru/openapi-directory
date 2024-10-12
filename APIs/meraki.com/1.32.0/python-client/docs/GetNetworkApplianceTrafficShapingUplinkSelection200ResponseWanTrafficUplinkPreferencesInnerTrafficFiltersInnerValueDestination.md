# GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination

Destination of 'custom' type traffic filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr** | **str** | CIDR format address (e.g.\&quot;192.168.10.1\&quot;, which is the same as \&quot;192.168.10.1/32\&quot;), or \&quot;any\&quot; | [optional] 
**port** | **str** | E.g.: \&quot;any\&quot;, \&quot;0\&quot; (also means \&quot;any\&quot;), \&quot;8080\&quot;, \&quot;1-1024\&quot; | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination import GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination from a JSON string
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_instance = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_dict = get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination from a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_from_dict = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.from_dict(get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


