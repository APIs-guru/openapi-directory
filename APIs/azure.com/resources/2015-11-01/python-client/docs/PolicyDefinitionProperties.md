# PolicyDefinitionProperties

Policy definition properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the policy definition description. | [optional] 
**display_name** | **str** | Gets or sets the policy definition display name. | [optional] 
**policy_rule** | **object** | The policy rule json. | [optional] 

## Example

```python
from openapi_client.models.policy_definition_properties import PolicyDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDefinitionProperties from a JSON string
policy_definition_properties_instance = PolicyDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(PolicyDefinitionProperties.to_json())

# convert the object into a dict
policy_definition_properties_dict = policy_definition_properties_instance.to_dict()
# create an instance of PolicyDefinitionProperties from a dict
policy_definition_properties_from_dict = PolicyDefinitionProperties.from_dict(policy_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


