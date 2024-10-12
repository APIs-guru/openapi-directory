# CdnWebApplicationFirewallPolicy

Defines web application firewall policy for Azure CDN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**CdnWebApplicationFirewallPolicyProperties**](CdnWebApplicationFirewallPolicyProperties.md) |  | [optional] 
**sku** | **object** | The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile. | 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cdn_web_application_firewall_policy import CdnWebApplicationFirewallPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of CdnWebApplicationFirewallPolicy from a JSON string
cdn_web_application_firewall_policy_instance = CdnWebApplicationFirewallPolicy.from_json(json)
# print the JSON string representation of the object
print(CdnWebApplicationFirewallPolicy.to_json())

# convert the object into a dict
cdn_web_application_firewall_policy_dict = cdn_web_application_firewall_policy_instance.to_dict()
# create an instance of CdnWebApplicationFirewallPolicy from a dict
cdn_web_application_firewall_policy_from_dict = CdnWebApplicationFirewallPolicy.from_dict(cdn_web_application_firewall_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


