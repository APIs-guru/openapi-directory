# CreateOrganizationAdaptivePolicyAclRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dst_port** | **str** | Destination port. Must be in the format of single port: &#39;1&#39;, port list: &#39;1,2&#39; or port range: &#39;1-10&#39;, and in the range of 1-65535, or &#39;any&#39;. Default is &#39;any&#39;. | [optional] 
**policy** | **str** | &#39;allow&#39; or &#39;deny&#39; traffic specified by this rule. | 
**protocol** | **str** | The type of protocol (must be &#39;tcp&#39;, &#39;udp&#39;, &#39;icmp&#39; or &#39;any&#39;). | 
**src_port** | **str** | Source port. Must be in the format of single port: &#39;1&#39;, port list: &#39;1,2&#39; or port range: &#39;1-10&#39;, and in the range of 1-65535, or &#39;any&#39;. Default is &#39;any&#39;. | [optional] 

## Example

```python
from openapi_client.models.create_organization_adaptive_policy_acl_request_rules_inner import CreateOrganizationAdaptivePolicyAclRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAdaptivePolicyAclRequestRulesInner from a JSON string
create_organization_adaptive_policy_acl_request_rules_inner_instance = CreateOrganizationAdaptivePolicyAclRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAdaptivePolicyAclRequestRulesInner.to_json())

# convert the object into a dict
create_organization_adaptive_policy_acl_request_rules_inner_dict = create_organization_adaptive_policy_acl_request_rules_inner_instance.to_dict()
# create an instance of CreateOrganizationAdaptivePolicyAclRequestRulesInner from a dict
create_organization_adaptive_policy_acl_request_rules_inner_from_dict = CreateOrganizationAdaptivePolicyAclRequestRulesInner.from_dict(create_organization_adaptive_policy_acl_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


