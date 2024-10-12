# UpdateOrganizationAdaptivePolicyPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acls** | [**List[CreateOrganizationAdaptivePolicyPolicyRequestAclsInner]**](CreateOrganizationAdaptivePolicyPolicyRequestAclsInner.md) | An ordered array of adaptive policy ACLs (each requires one unique attribute) that apply to this policy | [optional] 
**destination_group** | [**CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup**](CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup.md) |  | [optional] 
**last_entry_rule** | **str** | The rule to apply if there is no matching ACL | [optional] 
**source_group** | [**CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup**](CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_organization_adaptive_policy_policy_request import UpdateOrganizationAdaptivePolicyPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationAdaptivePolicyPolicyRequest from a JSON string
update_organization_adaptive_policy_policy_request_instance = UpdateOrganizationAdaptivePolicyPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationAdaptivePolicyPolicyRequest.to_json())

# convert the object into a dict
update_organization_adaptive_policy_policy_request_dict = update_organization_adaptive_policy_policy_request_instance.to_dict()
# create an instance of UpdateOrganizationAdaptivePolicyPolicyRequest from a dict
update_organization_adaptive_policy_policy_request_from_dict = UpdateOrganizationAdaptivePolicyPolicyRequest.from_dict(update_organization_adaptive_policy_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


