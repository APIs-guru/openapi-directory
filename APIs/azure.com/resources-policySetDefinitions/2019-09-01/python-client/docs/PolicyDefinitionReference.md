# PolicyDefinitionReference

The policy definition reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_names** | **List[str]** | The name of the groups that this policy definition reference belongs to. | [optional] 
**parameters** | [**Dict[str, PolicyDefinitionReferenceParametersValue]**](PolicyDefinitionReferenceParametersValue.md) | The parameter values for the policy rule. The keys are the parameter names. | [optional] 
**policy_definition_id** | **str** | The ID of the policy definition or policy set definition. | 
**policy_definition_reference_id** | **str** | A unique id (within the policy set definition) for this policy definition reference. | [optional] 

## Example

```python
from openapi_client.models.policy_definition_reference import PolicyDefinitionReference

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDefinitionReference from a JSON string
policy_definition_reference_instance = PolicyDefinitionReference.from_json(json)
# print the JSON string representation of the object
print(PolicyDefinitionReference.to_json())

# convert the object into a dict
policy_definition_reference_dict = policy_definition_reference_instance.to_dict()
# create an instance of PolicyDefinitionReference from a dict
policy_definition_reference_from_dict = PolicyDefinitionReference.from_dict(policy_definition_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


