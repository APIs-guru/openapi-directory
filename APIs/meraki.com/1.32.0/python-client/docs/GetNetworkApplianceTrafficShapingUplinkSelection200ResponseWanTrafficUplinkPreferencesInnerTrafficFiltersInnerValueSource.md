# GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource

Source of 'custom' type traffic filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr** | **str** | CIDR format address (e.g.\&quot;192.168.10.1\&quot;, which is the same as \&quot;192.168.10.1/32\&quot;), or \&quot;any\&quot;. Cannot be used in combination with the \&quot;vlan\&quot; property | [optional] 
**host** | **int** | Host ID in the VLAN. Should not exceed the VLAN subnet capacity. Must be used along with the \&quot;vlan\&quot; property and is currently only available under a template network. | [optional] 
**port** | **str** | E.g.: \&quot;any\&quot;, \&quot;0\&quot; (also means \&quot;any\&quot;), \&quot;8080\&quot;, \&quot;1-1024\&quot; | [optional] 
**vlan** | **int** | VLAN ID of the configured VLAN in the Meraki network. Cannot be used in combination with the \&quot;cidr\&quot; property and is currently only available under a template network. | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source import GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource from a JSON string
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_instance = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource.to_json())

# convert the object into a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_dict = get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_instance.to_dict()
# create an instance of GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource from a dict
get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_from_dict = GetNetworkApplianceTrafficShapingUplinkSelection200ResponseWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource.from_dict(get_network_appliance_traffic_shaping_uplink_selection200_response_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


