# CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup

The destination adaptive policy group (requires one unique attribute)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the destination adaptive policy group | [optional] 
**name** | **str** | The name of the destination adaptive policy group | [optional] 
**sgt** | **int** | The SGT of the destination adaptive policy group | [optional] 

## Example

```python
from openapi_client.models.create_organization_adaptive_policy_policy_request_destination_group import CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup from a JSON string
create_organization_adaptive_policy_policy_request_destination_group_instance = CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup.to_json())

# convert the object into a dict
create_organization_adaptive_policy_policy_request_destination_group_dict = create_organization_adaptive_policy_policy_request_destination_group_instance.to_dict()
# create an instance of CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup from a dict
create_organization_adaptive_policy_policy_request_destination_group_from_dict = CreateOrganizationAdaptivePolicyPolicyRequestDestinationGroup.from_dict(create_organization_adaptive_policy_policy_request_destination_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


