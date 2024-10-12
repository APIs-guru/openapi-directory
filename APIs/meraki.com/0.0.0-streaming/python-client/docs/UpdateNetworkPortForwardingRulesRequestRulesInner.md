# UpdateNetworkPortForwardingRulesRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_ips** | **List[str]** | An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges (or any) | 
**lan_ip** | **str** | The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN | 
**local_port** | **str** | A port or port ranges that will receive the forwarded traffic from the WAN | 
**name** | **str** | A descriptive name for the rule | [optional] 
**protocol** | **str** | TCP or UDP | 
**public_port** | **str** | A port or port ranges that will be forwarded to the host on the LAN | 
**uplink** | **str** | The physical WAN interface on which the traffic will arrive (&#39;internet1&#39; or, if available, &#39;internet2&#39; or &#39;both&#39;) | [optional] 

## Example

```python
from openapi_client.models.update_network_port_forwarding_rules_request_rules_inner import UpdateNetworkPortForwardingRulesRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkPortForwardingRulesRequestRulesInner from a JSON string
update_network_port_forwarding_rules_request_rules_inner_instance = UpdateNetworkPortForwardingRulesRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkPortForwardingRulesRequestRulesInner.to_json())

# convert the object into a dict
update_network_port_forwarding_rules_request_rules_inner_dict = update_network_port_forwarding_rules_request_rules_inner_instance.to_dict()
# create an instance of UpdateNetworkPortForwardingRulesRequestRulesInner from a dict
update_network_port_forwarding_rules_request_rules_inner_from_dict = UpdateNetworkPortForwardingRulesRequestRulesInner.from_dict(update_network_port_forwarding_rules_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


