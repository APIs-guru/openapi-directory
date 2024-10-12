# CreateOrganizationAdaptivePolicyAclRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the adaptive policy ACL | [optional] [default to '']
**ip_version** | **str** | IP version of adpative policy ACL. One of: &#39;any&#39;, &#39;ipv4&#39; or &#39;ipv6&#39; | 
**name** | **str** | Name of the adaptive policy ACL | 
**rules** | [**List[CreateOrganizationAdaptivePolicyAclRequestRulesInner]**](CreateOrganizationAdaptivePolicyAclRequestRulesInner.md) | An ordered array of the adaptive policy ACL rules. | 

## Example

```python
from openapi_client.models.create_organization_adaptive_policy_acl_request import CreateOrganizationAdaptivePolicyAclRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAdaptivePolicyAclRequest from a JSON string
create_organization_adaptive_policy_acl_request_instance = CreateOrganizationAdaptivePolicyAclRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAdaptivePolicyAclRequest.to_json())

# convert the object into a dict
create_organization_adaptive_policy_acl_request_dict = create_organization_adaptive_policy_acl_request_instance.to_dict()
# create an instance of CreateOrganizationAdaptivePolicyAclRequest from a dict
create_organization_adaptive_policy_acl_request_from_dict = CreateOrganizationAdaptivePolicyAclRequest.from_dict(create_organization_adaptive_policy_acl_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


