# UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of definition. Can be one of &#39;application&#39;, &#39;applicationCategory&#39;, &#39;host&#39;, &#39;port&#39;, &#39;ipRange&#39; or &#39;localNet&#39;. | 
**value** | **str** |     If \&quot;type\&quot; is &#39;host&#39;, &#39;port&#39;, &#39;ipRange&#39; or &#39;localNet&#39;, then \&quot;value\&quot; must be a string, matching either     a hostname (e.g. \&quot;somesite.com\&quot;), a port (e.g. 8080), or an IP range (\&quot;192.1.0.0\&quot;,     \&quot;192.1.0.0/16\&quot;, or \&quot;10.1.0.0/16:80\&quot;). &#39;localNet&#39; also supports CIDR notation, excluding     custom ports.      If \&quot;type\&quot; is &#39;application&#39; or &#39;applicationCategory&#39;, then \&quot;value\&quot; must be an object     with the structure { \&quot;id\&quot;: \&quot;meraki:layer7/...\&quot; }, where \&quot;id\&quot; is the application category or     application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories     endpoint).  | 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_rules_request_rules_inner_definitions_inner import UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner from a JSON string
update_network_appliance_traffic_shaping_rules_request_rules_inner_definitions_inner_instance = UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_rules_request_rules_inner_definitions_inner_dict = update_network_appliance_traffic_shaping_rules_request_rules_inner_definitions_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner from a dict
update_network_appliance_traffic_shaping_rules_request_rules_inner_definitions_inner_from_dict = UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner.from_dict(update_network_appliance_traffic_shaping_rules_request_rules_inner_definitions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


