# WebApplicationFirewallPolicy

Defines web application firewall policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**WebApplicationFirewallPolicyPropertiesFormat**](WebApplicationFirewallPolicyPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_application_firewall_policy import WebApplicationFirewallPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of WebApplicationFirewallPolicy from a JSON string
web_application_firewall_policy_instance = WebApplicationFirewallPolicy.from_json(json)
# print the JSON string representation of the object
print(WebApplicationFirewallPolicy.to_json())

# convert the object into a dict
web_application_firewall_policy_dict = web_application_firewall_policy_instance.to_dict()
# create an instance of WebApplicationFirewallPolicy from a dict
web_application_firewall_policy_from_dict = WebApplicationFirewallPolicy.from_dict(web_application_firewall_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


