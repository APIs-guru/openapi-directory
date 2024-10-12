# UpdateNetworkWirelessSsidTrafficShapingRulesRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definitions** | [**List[UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner]**](UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner.md) |     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.  | 
**dscp_tag_value** | **int** |     The DSCP tag applied by your rule. null means &#39;Do not change DSCP tag&#39;.     For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.  | [optional] 
**pcp_tag_value** | **int** |     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).     null means &#39;Do not set PCP tag&#39;.  | [optional] 
**per_client_bandwidth_limits** | [**UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits**](UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_traffic_shaping_rules_request_rules_inner import UpdateNetworkWirelessSsidTrafficShapingRulesRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidTrafficShapingRulesRequestRulesInner from a JSON string
update_network_wireless_ssid_traffic_shaping_rules_request_rules_inner_instance = UpdateNetworkWirelessSsidTrafficShapingRulesRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidTrafficShapingRulesRequestRulesInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_traffic_shaping_rules_request_rules_inner_dict = update_network_wireless_ssid_traffic_shaping_rules_request_rules_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidTrafficShapingRulesRequestRulesInner from a dict
update_network_wireless_ssid_traffic_shaping_rules_request_rules_inner_from_dict = UpdateNetworkWirelessSsidTrafficShapingRulesRequestRulesInner.from_dict(update_network_wireless_ssid_traffic_shaping_rules_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


