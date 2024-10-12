# CreateOrganizationAdaptivePolicyPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acls** | [**List[CreateOrganizationAdaptivePolicyPolicyRequestAclsInner]**](CreateOrganizationAdaptivePolicyPolicyRequestAclsInner.md) | An ordered array of adaptive policy ACLs (each requires one unique attribute) that apply to this policy (default: []) | [optional] 
**destination_group** | [**CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup**](CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup.md) |  | 
**last_entry_rule** | **str** | The rule to apply if there is no matching ACL (default: \&quot;default\&quot;) | [optional] 
**source_group** | [**CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup**](CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup.md) |  | 

## Example

```python
from openapi_client.models.create_organization_adaptive_policy_policy_request import CreateOrganizationAdaptivePolicyPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAdaptivePolicyPolicyRequest from a JSON string
create_organization_adaptive_policy_policy_request_instance = CreateOrganizationAdaptivePolicyPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAdaptivePolicyPolicyRequest.to_json())

# convert the object into a dict
create_organization_adaptive_policy_policy_request_dict = create_organization_adaptive_policy_policy_request_instance.to_dict()
# create an instance of CreateOrganizationAdaptivePolicyPolicyRequest from a dict
create_organization_adaptive_policy_policy_request_from_dict = CreateOrganizationAdaptivePolicyPolicyRequest.from_dict(create_organization_adaptive_policy_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


