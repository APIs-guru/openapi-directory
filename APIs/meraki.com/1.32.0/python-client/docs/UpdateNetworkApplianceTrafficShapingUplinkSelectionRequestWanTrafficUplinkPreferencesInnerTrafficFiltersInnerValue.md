# UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue

Value object of this traffic filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.md) |  | 
**protocol** | **str** | Protocol of this custom type traffic filter. Must be one of: &#39;tcp&#39;, &#39;udp&#39;, &#39;icmp6&#39; or &#39;any&#39; | [optional] 
**source** | [**UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource.md) |  | 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue from a JSON string
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_instance = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_dict = update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue from a dict
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_from_dict = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValue.from_dict(update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


