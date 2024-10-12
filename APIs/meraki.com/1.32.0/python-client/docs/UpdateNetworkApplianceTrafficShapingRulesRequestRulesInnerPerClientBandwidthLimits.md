# UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits

    An object describing the bandwidth settings for your rule. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_limits** | [**UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimitsBandwidthLimits**](UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimitsBandwidthLimits.md) |  | [optional] 
**settings** | **str** | How bandwidth limits are applied by your rule. Can be one of &#39;network default&#39;, &#39;ignore&#39; or &#39;custom&#39;. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits import UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits from a JSON string
update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_instance = UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_dict = update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits from a dict
update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_from_dict = UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits.from_dict(update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


