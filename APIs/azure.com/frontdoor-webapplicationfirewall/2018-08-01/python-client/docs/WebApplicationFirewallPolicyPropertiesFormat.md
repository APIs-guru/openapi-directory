# WebApplicationFirewallPolicyPropertiesFormat

Defines web application firewall policy properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_rules** | [**CustomRules**](CustomRules.md) |  | [optional] 
**managed_rules** | [**ManagedRuleSets**](ManagedRuleSets.md) |  | [optional] 
**policy_settings** | [**PolicySettings**](PolicySettings.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the WebApplicationFirewallPolicy. | [optional] [readonly] 
**resource_state** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_application_firewall_policy_properties_format import WebApplicationFirewallPolicyPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of WebApplicationFirewallPolicyPropertiesFormat from a JSON string
web_application_firewall_policy_properties_format_instance = WebApplicationFirewallPolicyPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(WebApplicationFirewallPolicyPropertiesFormat.to_json())

# convert the object into a dict
web_application_firewall_policy_properties_format_dict = web_application_firewall_policy_properties_format_instance.to_dict()
# create an instance of WebApplicationFirewallPolicyPropertiesFormat from a dict
web_application_firewall_policy_properties_format_from_dict = WebApplicationFirewallPolicyPropertiesFormat.from_dict(web_application_firewall_policy_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


