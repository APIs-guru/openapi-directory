# PolicyDefinitionReference

The policy definition reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **object** | Required if a parameter is used in policy rule. | [optional] 
**policy_definition_id** | **str** | The ID of the policy definition or policy set definition. | [optional] 

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


