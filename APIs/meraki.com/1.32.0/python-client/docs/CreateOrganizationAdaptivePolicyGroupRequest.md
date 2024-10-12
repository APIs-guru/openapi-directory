# CreateOrganizationAdaptivePolicyGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the group (default: \&quot;\&quot;) | [optional] 
**name** | **str** | Name of the group | 
**policy_objects** | [**List[CreateOrganizationAdaptivePolicyGroupRequestPolicyObjectsInner]**](CreateOrganizationAdaptivePolicyGroupRequestPolicyObjectsInner.md) | The policy objects that belong to this group; traffic from addresses specified by these policy objects will be tagged with this group&#39;s SGT value if no other tagging scheme is being used (each requires one unique attribute) (default: []) | [optional] 
**sgt** | **int** | SGT value of the group | 

## Example

```python
from openapi_client.models.create_organization_adaptive_policy_group_request import CreateOrganizationAdaptivePolicyGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAdaptivePolicyGroupRequest from a JSON string
create_organization_adaptive_policy_group_request_instance = CreateOrganizationAdaptivePolicyGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAdaptivePolicyGroupRequest.to_json())

# convert the object into a dict
create_organization_adaptive_policy_group_request_dict = create_organization_adaptive_policy_group_request_instance.to_dict()
# create an instance of CreateOrganizationAdaptivePolicyGroupRequest from a dict
create_organization_adaptive_policy_group_request_from_dict = CreateOrganizationAdaptivePolicyGroupRequest.from_dict(create_organization_adaptive_policy_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


