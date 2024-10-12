# UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerPerformanceClass

Performance class setting for this uplink preference rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builtin_performance_class_name** | **str** | Name of builtin performance class, must be present when performanceClass type is &#39;builtin&#39;, and value must be one of: &#39;VoIP&#39; | [optional] 
**custom_performance_class_id** | **str** | ID of created custom performance class, must be present when performanceClass type is &#39;custom&#39; | [optional] 
**type** | **str** | Type of this performance class. Must be one of: &#39;builtin&#39; or &#39;custom&#39; | 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_performance_class import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerPerformanceClass

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerPerformanceClass from a JSON string
update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_performance_class_instance = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerPerformanceClass.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerPerformanceClass.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_performance_class_dict = update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_performance_class_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerPerformanceClass from a dict
update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_performance_class_from_dict = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInnerPerformanceClass.from_dict(update_network_appliance_traffic_shaping_uplink_selection_request_vpn_traffic_uplink_preferences_inner_performance_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


