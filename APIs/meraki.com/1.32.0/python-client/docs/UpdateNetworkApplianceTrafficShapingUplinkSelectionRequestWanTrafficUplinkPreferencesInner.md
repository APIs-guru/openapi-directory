# UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preferred_uplink** | **str** | Preferred uplink for this uplink preference rule. Must be one of: &#39;wan1&#39; or &#39;wan2&#39; | 
**traffic_filters** | [**List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInner]**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInnerTrafficFiltersInner.md) | Array of traffic filters for this uplink preference rule | 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInner from a JSON string
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_instance = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInner.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_dict = update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInner from a dict
update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_from_dict = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInner.from_dict(update_network_appliance_traffic_shaping_uplink_selection_request_wan_traffic_uplink_preferences_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


