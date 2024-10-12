# UpdateOrganizationAdaptivePolicyAclRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the adaptive policy ACL | [optional] 
**ip_version** | **str** | IP version of adpative policy ACL. One of: &#39;any&#39;, &#39;ipv4&#39; or &#39;ipv6&#39; | [optional] 
**name** | **str** | Name of the adaptive policy ACL | [optional] 
**rules** | [**List[CreateOrganizationAdaptivePolicyAclRequestRulesInner]**](CreateOrganizationAdaptivePolicyAclRequestRulesInner.md) | An ordered array of the adaptive policy ACL rules. An empty array will clear the rules. | [optional] 

## Example

```python
from openapi_client.models.update_organization_adaptive_policy_acl_request import UpdateOrganizationAdaptivePolicyAclRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationAdaptivePolicyAclRequest from a JSON string
update_organization_adaptive_policy_acl_request_instance = UpdateOrganizationAdaptivePolicyAclRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationAdaptivePolicyAclRequest.to_json())

# convert the object into a dict
update_organization_adaptive_policy_acl_request_dict = update_organization_adaptive_policy_acl_request_instance.to_dict()
# create an instance of UpdateOrganizationAdaptivePolicyAclRequest from a dict
update_organization_adaptive_policy_acl_request_from_dict = UpdateOrganizationAdaptivePolicyAclRequest.from_dict(update_organization_adaptive_policy_acl_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


