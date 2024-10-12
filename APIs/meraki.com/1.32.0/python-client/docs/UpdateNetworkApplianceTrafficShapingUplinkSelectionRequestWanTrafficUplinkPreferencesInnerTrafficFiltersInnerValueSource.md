# UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource

Source of this custom type traffic filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr** | **str** | CIDR format address, or \&quot;any\&quot;. E.g.: \&quot;192.168.10.0/24\&quot;,  \&quot;192.168.10.1\&quot; (same as \&quot;192.168.10.1/32\&quot;), \&quot;0.0.0.0/0\&quot; (same as \&quot;any\&quot;) | [optional] 
**host** | **int** | Host ID in the VLAN, should be used along with &#39;vlan&#39;, and not exceed the vlan subnet capacity. Currently only available under a template network. | [optional] 
**port** | **str** | E.g.: \&quot;any\&quot;, \&quot;0\&quot; (also means \&quot;any\&quot;), \&quot;8080\&quot;, \&quot;1-1024\&quot; | [optional] 
**vlan** | **int** | VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource from a JSON string
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_instance = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_dict = update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource from a dict
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_from_dict = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInnerValueSource.from_dict(update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_traffic_filters_inner_value_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


