# CdnWebApplicationFirewallPolicyProperties

Defines CDN web application firewall policy properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_rules** | [**CustomRuleList**](CustomRuleList.md) |  | [optional] 
**endpoint_links** | [**List[CdnEndpoint]**](CdnEndpoint.md) | Describes Azure CDN endpoints associated with this Web Application Firewall policy. | [optional] [readonly] 
**managed_rules** | [**ManagedRuleSetList**](ManagedRuleSetList.md) |  | [optional] 
**policy_settings** | [**PolicySettings**](PolicySettings.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the WebApplicationFirewallPolicy. | [optional] [readonly] 
**rate_limit_rules** | [**RateLimitRuleList**](RateLimitRuleList.md) |  | [optional] 
**resource_state** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.cdn_web_application_firewall_policy_properties import CdnWebApplicationFirewallPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CdnWebApplicationFirewallPolicyProperties from a JSON string
cdn_web_application_firewall_policy_properties_instance = CdnWebApplicationFirewallPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(CdnWebApplicationFirewallPolicyProperties.to_json())

# convert the object into a dict
cdn_web_application_firewall_policy_properties_dict = cdn_web_application_firewall_policy_properties_instance.to_dict()
# create an instance of CdnWebApplicationFirewallPolicyProperties from a dict
cdn_web_application_firewall_policy_properties_from_dict = CdnWebApplicationFirewallPolicyProperties.from_dict(cdn_web_application_firewall_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


