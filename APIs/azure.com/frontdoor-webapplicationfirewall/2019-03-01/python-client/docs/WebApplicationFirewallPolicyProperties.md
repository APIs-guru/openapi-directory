# WebApplicationFirewallPolicyProperties

Defines web application firewall policy properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_rules** | [**CustomRuleList**](CustomRuleList.md) |  | [optional] 
**frontend_endpoint_links** | [**List[FrontendEndpointLink]**](FrontendEndpointLink.md) | Describes Frontend Endpoints associated with this Web Application Firewall policy. | [optional] [readonly] 
**managed_rules** | [**ManagedRuleSetList**](ManagedRuleSetList.md) |  | [optional] 
**policy_settings** | [**PolicySettings**](PolicySettings.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the policy. | [optional] [readonly] 
**resource_state** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_application_firewall_policy_properties import WebApplicationFirewallPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebApplicationFirewallPolicyProperties from a JSON string
web_application_firewall_policy_properties_instance = WebApplicationFirewallPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(WebApplicationFirewallPolicyProperties.to_json())

# convert the object into a dict
web_application_firewall_policy_properties_dict = web_application_firewall_policy_properties_instance.to_dict()
# create an instance of WebApplicationFirewallPolicyProperties from a dict
web_application_firewall_policy_properties_from_dict = WebApplicationFirewallPolicyProperties.from_dict(web_application_firewall_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


