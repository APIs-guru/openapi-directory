# CdnWebApplicationFirewallPolicyPatchParameters

Properties required to update a CdnWebApplicationFirewallPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | CdnWebApplicationFirewallPolicy tags | [optional] 

## Example

```python
from openapi_client.models.cdn_web_application_firewall_policy_patch_parameters import CdnWebApplicationFirewallPolicyPatchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CdnWebApplicationFirewallPolicyPatchParameters from a JSON string
cdn_web_application_firewall_policy_patch_parameters_instance = CdnWebApplicationFirewallPolicyPatchParameters.from_json(json)
# print the JSON string representation of the object
print(CdnWebApplicationFirewallPolicyPatchParameters.to_json())

# convert the object into a dict
cdn_web_application_firewall_policy_patch_parameters_dict = cdn_web_application_firewall_policy_patch_parameters_instance.to_dict()
# create an instance of CdnWebApplicationFirewallPolicyPatchParameters from a dict
cdn_web_application_firewall_policy_patch_parameters_from_dict = CdnWebApplicationFirewallPolicyPatchParameters.from_dict(cdn_web_application_firewall_policy_patch_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


