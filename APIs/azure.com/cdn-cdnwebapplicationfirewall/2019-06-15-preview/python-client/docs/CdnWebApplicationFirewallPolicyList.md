# CdnWebApplicationFirewallPolicyList

Defines a list of WebApplicationFirewallPolicies for Azure CDN. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of WebApplicationFirewallPolicy objects if there are any. | [optional] 
**value** | [**List[CdnWebApplicationFirewallPolicy]**](CdnWebApplicationFirewallPolicy.md) | List of Azure CDN WebApplicationFirewallPolicies within a resource group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cdn_web_application_firewall_policy_list import CdnWebApplicationFirewallPolicyList

# TODO update the JSON string below
json = "{}"
# create an instance of CdnWebApplicationFirewallPolicyList from a JSON string
cdn_web_application_firewall_policy_list_instance = CdnWebApplicationFirewallPolicyList.from_json(json)
# print the JSON string representation of the object
print(CdnWebApplicationFirewallPolicyList.to_json())

# convert the object into a dict
cdn_web_application_firewall_policy_list_dict = cdn_web_application_firewall_policy_list_instance.to_dict()
# create an instance of CdnWebApplicationFirewallPolicyList from a dict
cdn_web_application_firewall_policy_list_from_dict = CdnWebApplicationFirewallPolicyList.from_dict(cdn_web_application_firewall_policy_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


