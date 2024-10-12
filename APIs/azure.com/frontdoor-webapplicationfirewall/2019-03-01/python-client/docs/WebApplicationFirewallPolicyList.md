# WebApplicationFirewallPolicyList

Defines a list of WebApplicationFirewallPolicies. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of WebApplicationFirewallPolicy objects if there are any. | [optional] 
**value** | [**List[WebApplicationFirewallPolicy]**](WebApplicationFirewallPolicy.md) | List of WebApplicationFirewallPolicies within a resource group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_application_firewall_policy_list import WebApplicationFirewallPolicyList

# TODO update the JSON string below
json = "{}"
# create an instance of WebApplicationFirewallPolicyList from a JSON string
web_application_firewall_policy_list_instance = WebApplicationFirewallPolicyList.from_json(json)
# print the JSON string representation of the object
print(WebApplicationFirewallPolicyList.to_json())

# convert the object into a dict
web_application_firewall_policy_list_dict = web_application_firewall_policy_list_instance.to_dict()
# create an instance of WebApplicationFirewallPolicyList from a dict
web_application_firewall_policy_list_from_dict = WebApplicationFirewallPolicyList.from_dict(web_application_firewall_policy_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


