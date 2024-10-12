# UpdateOrganizationApplianceVpnVpnFirewallRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[UpdateOrganizationApplianceVpnVpnFirewallRulesRequestRulesInner]**](UpdateOrganizationApplianceVpnVpnFirewallRulesRequestRulesInner.md) | An ordered array of the firewall rules (not including the default rule) | [optional] 
**syslog_default_rule** | **bool** | Log the special default rule (boolean value - enable only if you&#39;ve configured a syslog server) (optional) | [optional] 

## Example

```python
from openapi_client.models.update_organization_appliance_vpn_vpn_firewall_rules_request import UpdateOrganizationApplianceVpnVpnFirewallRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationApplianceVpnVpnFirewallRulesRequest from a JSON string
update_organization_appliance_vpn_vpn_firewall_rules_request_instance = UpdateOrganizationApplianceVpnVpnFirewallRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationApplianceVpnVpnFirewallRulesRequest.to_json())

# convert the object into a dict
update_organization_appliance_vpn_vpn_firewall_rules_request_dict = update_organization_appliance_vpn_vpn_firewall_rules_request_instance.to_dict()
# create an instance of UpdateOrganizationApplianceVpnVpnFirewallRulesRequest from a dict
update_organization_appliance_vpn_vpn_firewall_rules_request_from_dict = UpdateOrganizationApplianceVpnVpnFirewallRulesRequest.from_dict(update_organization_appliance_vpn_vpn_firewall_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


