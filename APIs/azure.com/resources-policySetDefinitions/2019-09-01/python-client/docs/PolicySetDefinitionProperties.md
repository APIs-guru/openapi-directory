# PolicySetDefinitionProperties

The policy set definition properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The policy set definition description. | [optional] 
**display_name** | **str** | The display name of the policy set definition. | [optional] 
**metadata** | **object** | The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. | [optional] 
**parameters** | [**Dict[str, PolicySetDefinitionPropertiesParametersValue]**](PolicySetDefinitionPropertiesParametersValue.md) | The parameter definitions for parameters used in the policy. The keys are the parameter names. | [optional] 
**policy_definition_groups** | [**List[PolicyDefinitionGroup]**](PolicyDefinitionGroup.md) | The metadata describing groups of policy definition references within the policy set definition. | [optional] 
**policy_definitions** | [**List[PolicyDefinitionReference]**](PolicyDefinitionReference.md) | An array of policy definition references. | 
**policy_type** | **str** | The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. | [optional] 

## Example

```python
from openapi_client.models.policy_set_definition_properties import PolicySetDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySetDefinitionProperties from a JSON string
policy_set_definition_properties_instance = PolicySetDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(PolicySetDefinitionProperties.to_json())

# convert the object into a dict
policy_set_definition_properties_dict = policy_set_definition_properties_instance.to_dict()
# create an instance of PolicySetDefinitionProperties from a dict
policy_set_definition_properties_from_dict = PolicySetDefinitionProperties.from_dict(policy_set_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


