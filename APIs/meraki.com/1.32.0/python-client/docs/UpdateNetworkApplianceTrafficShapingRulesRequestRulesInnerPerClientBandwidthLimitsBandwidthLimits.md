# UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimitsBandwidthLimits

The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | The maximum download limit (integer, in Kbps). | [optional] 
**limit_up** | **int** | The maximum upload limit (integer, in Kbps). | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_bandwidth_limits import UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimitsBandwidthLimits

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimitsBandwidthLimits from a JSON string
update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_bandwidth_limits_instance = UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimitsBandwidthLimits.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimitsBandwidthLimits.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_bandwidth_limits_dict = update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_bandwidth_limits_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimitsBandwidthLimits from a dict
update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_bandwidth_limits_from_dict = UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimitsBandwidthLimits.from_dict(update_network_appliance_traffic_shaping_rules_request_rules_inner_per_client_bandwidth_limits_bandwidth_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


