# UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_active_auto_vpn_enabled** | **bool** | Toggle for enabling or disabling active-active AutoVPN | [optional] 
**default_uplink** | **str** | The default uplink. Must be one of: &#39;wan1&#39; or &#39;wan2&#39; | [optional] 
**failover_and_failback** | [**UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestFailoverAndFailback**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestFailoverAndFailback.md) |  | [optional] 
**load_balancing_enabled** | **bool** | Toggle for enabling or disabling load balancing | [optional] 
**vpn_traffic_uplink_preferences** | [**List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInner]**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestVpnTrafficUplinkPreferencesInner.md) | Array of uplink preference rules for VPN traffic | [optional] 
**wan_traffic_uplink_preferences** | [**List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInner]**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestWanTrafficUplinkPreferencesInner.md) | Array of uplink preference rules for WAN traffic | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest from a JSON string
update_network_appliance_traffic_shaping_uplink_selection_request_instance = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_selection_request_dict = update_network_appliance_traffic_shaping_uplink_selection_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest from a dict
update_network_appliance_traffic_shaping_uplink_selection_request_from_dict = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest.from_dict(update_network_appliance_traffic_shaping_uplink_selection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


