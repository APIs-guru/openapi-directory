# UpdateOrganizationAdaptivePolicyGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the group | [optional] 
**name** | **str** | Name of the group | [optional] 
**policy_objects** | [**List[CreateOrganizationAdaptivePolicyGroupRequestPolicyObjectsInner]**](CreateOrganizationAdaptivePolicyGroupRequestPolicyObjectsInner.md) | The policy objects that belong to this group; traffic from addresses specified by these policy objects will be tagged with this group&#39;s SGT value if no other tagging scheme is being used (each requires one unique attribute) | [optional] 
**sgt** | **int** | SGT value of the group | [optional] 

## Example

```python
from openapi_client.models.update_organization_adaptive_policy_group_request import UpdateOrganizationAdaptivePolicyGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationAdaptivePolicyGroupRequest from a JSON string
update_organization_adaptive_policy_group_request_instance = UpdateOrganizationAdaptivePolicyGroupRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationAdaptivePolicyGroupRequest.to_json())

# convert the object into a dict
update_organization_adaptive_policy_group_request_dict = update_organization_adaptive_policy_group_request_instance.to_dict()
# create an instance of UpdateOrganizationAdaptivePolicyGroupRequest from a dict
update_organization_adaptive_policy_group_request_from_dict = UpdateOrganizationAdaptivePolicyGroupRequest.from_dict(update_organization_adaptive_policy_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


