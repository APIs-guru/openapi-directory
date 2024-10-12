# UpdateOrganizationVpnFirewallRulesRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Description of the rule (optional) | [optional] 
**dest_cidr** | **str** | Comma-separated list of destination IP address(es) (in IP or CIDR notation) or &#39;any&#39; (FQDN not supported) | 
**dest_port** | **str** | Comma-separated list of destination port(s) (integer in the range 1-65535), or &#39;any&#39; | [optional] 
**policy** | **str** | &#39;allow&#39; or &#39;deny&#39; traffic specified by this rule | 
**protocol** | **str** | The type of protocol (must be &#39;tcp&#39;, &#39;udp&#39;, &#39;icmp&#39;, &#39;icmp6&#39; or &#39;any&#39;) | 
**src_cidr** | **str** | Comma-separated list of source IP address(es) (in IP or CIDR notation), or &#39;any&#39; (FQDN not supported) | 
**src_port** | **str** | Comma-separated list of source port(s) (integer in the range 1-65535), or &#39;any&#39; | [optional] 
**syslog_enabled** | **bool** | Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional) | [optional] 

## Example

```python
from openapi_client.models.update_organization_vpn_firewall_rules_request_rules_inner import UpdateOrganizationVpnFirewallRulesRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationVpnFirewallRulesRequestRulesInner from a JSON string
update_organization_vpn_firewall_rules_request_rules_inner_instance = UpdateOrganizationVpnFirewallRulesRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationVpnFirewallRulesRequestRulesInner.to_json())

# convert the object into a dict
update_organization_vpn_firewall_rules_request_rules_inner_dict = update_organization_vpn_firewall_rules_request_rules_inner_instance.to_dict()
# create an instance of UpdateOrganizationVpnFirewallRulesRequestRulesInner from a dict
update_organization_vpn_firewall_rules_request_rules_inner_from_dict = UpdateOrganizationVpnFirewallRulesRequestRulesInner.from_dict(update_organization_vpn_firewall_rules_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


