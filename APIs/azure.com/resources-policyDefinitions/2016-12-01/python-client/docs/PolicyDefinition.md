# PolicyDefinition

The policy definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the policy definition. | [optional] [readonly] 
**name** | **str** | The name of the policy definition. | [optional] [readonly] 
**properties** | [**PolicyDefinitionProperties**](PolicyDefinitionProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_definition import PolicyDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDefinition from a JSON string
policy_definition_instance = PolicyDefinition.from_json(json)
# print the JSON string representation of the object
print(PolicyDefinition.to_json())

# convert the object into a dict
policy_definition_dict = policy_definition_instance.to_dict()
# create an instance of PolicyDefinition from a dict
policy_definition_from_dict = PolicyDefinition.from_dict(policy_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


