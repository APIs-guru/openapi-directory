# UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination

Destination of this custom type traffic filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr** | **str** | CIDR format address, or \&quot;any\&quot;. E.g.: \&quot;192.168.10.0/24\&quot;,  \&quot;192.168.10.1\&quot; (same as \&quot;192.168.10.1/32\&quot;), \&quot;0.0.0.0/0\&quot; (same as \&quot;any\&quot;) | [optional] 
**port** | **str** | E.g.: \&quot;any\&quot;, \&quot;0\&quot; (also means \&quot;any\&quot;), \&quot;8080\&quot;, \&quot;1-1024\&quot; | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination from a JSON string
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_instance = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_dict = update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination from a dict
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_from_dict = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueDestination.from_dict(update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


