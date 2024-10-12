# PolicySetDefinition

The policy set definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the policy set definition. | [optional] [readonly] 
**name** | **str** | The name of the policy set definition. | [optional] [readonly] 
**properties** | [**PolicySetDefinitionProperties**](PolicySetDefinitionProperties.md) |  | [optional] 
**type** | **str** | The type of the resource (Microsoft.Authorization/policySetDefinitions). | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_set_definition import PolicySetDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySetDefinition from a JSON string
policy_set_definition_instance = PolicySetDefinition.from_json(json)
# print the JSON string representation of the object
print(PolicySetDefinition.to_json())

# convert the object into a dict
policy_set_definition_dict = policy_set_definition_instance.to_dict()
# create an instance of PolicySetDefinition from a dict
policy_set_definition_from_dict = PolicySetDefinition.from_dict(policy_set_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


