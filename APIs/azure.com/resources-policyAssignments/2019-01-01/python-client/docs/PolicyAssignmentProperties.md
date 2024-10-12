# PolicyAssignmentProperties

The policy assignment properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | This message will be part of response in case of policy violation. | [optional] 
**display_name** | **str** | The display name of the policy assignment. | [optional] 
**metadata** | **object** | The policy assignment metadata. | [optional] 
**not_scopes** | **List[str]** | The policy&#39;s excluded scopes. | [optional] 
**parameters** | **object** | Required if a parameter is used in policy rule. | [optional] 
**policy_definition_id** | **str** | The ID of the policy definition or policy set definition being assigned. | [optional] 
**scope** | **str** | The scope for the policy assignment. | [optional] 

## Example

```python
from openapi_client.models.policy_assignment_properties import PolicyAssignmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyAssignmentProperties from a JSON string
policy_assignment_properties_instance = PolicyAssignmentProperties.from_json(json)
# print the JSON string representation of the object
print(PolicyAssignmentProperties.to_json())

# convert the object into a dict
policy_assignment_properties_dict = policy_assignment_properties_instance.to_dict()
# create an instance of PolicyAssignmentProperties from a dict
policy_assignment_properties_from_dict = PolicyAssignmentProperties.from_dict(policy_assignment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


