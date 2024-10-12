# CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup

The source adaptive policy group (requires one unique attribute)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the source adaptive policy group | [optional] 
**name** | **str** | The name of the source adaptive policy group | [optional] 
**sgt** | **int** | The SGT of the source adaptive policy group | [optional] 

## Example

```python
from openapi_client.models.create_organization_adaptive_policy_policy_request_source_group import CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup from a JSON string
create_organization_adaptive_policy_policy_request_source_group_instance = CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup.to_json())

# convert the object into a dict
create_organization_adaptive_policy_policy_request_source_group_dict = create_organization_adaptive_policy_policy_request_source_group_instance.to_dict()
# create an instance of CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup from a dict
create_organization_adaptive_policy_policy_request_source_group_from_dict = CreateOrganizationAdaptivePolicyPolicyRequestSourceGroup.from_dict(create_organization_adaptive_policy_policy_request_source_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


