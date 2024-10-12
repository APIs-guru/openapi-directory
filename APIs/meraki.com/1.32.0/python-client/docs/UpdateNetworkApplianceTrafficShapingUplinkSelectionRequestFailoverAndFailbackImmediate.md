# UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestFailoverAndFailbackImmediate

Immediate WAN transition terminates all flows (new and existing) on current WAN when it is deemed unreliable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Toggle for enabling or disabling immediate WAN failover and failback | 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request_failover_and_failback_immediate import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestFailoverAndFailbackImmediate

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestFailoverAndFailbackImmediate from a JSON string
update_network_appliance_traffic_shaping_uplink_selection_request_failover_and_failback_immediate_instance = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestFailoverAndFailbackImmediate.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestFailoverAndFailbackImmediate.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_uplink_selection_request_failover_and_failback_immediate_dict = update_network_appliance_traffic_shaping_uplink_selection_request_failover_and_failback_immediate_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestFailoverAndFailbackImmediate from a dict
update_network_appliance_traffic_shaping_uplink_selection_request_failover_and_failback_immediate_from_dict = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestFailoverAndFailbackImmediate.from_dict(update_network_appliance_traffic_shaping_uplink_selection_request_failover_and_failback_immediate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


