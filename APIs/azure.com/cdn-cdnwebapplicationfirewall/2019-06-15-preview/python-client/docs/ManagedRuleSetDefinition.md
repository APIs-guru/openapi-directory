# ManagedRuleSetDefinition

Describes a managed rule set definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagedRuleSetDefinitionProperties**](ManagedRuleSetDefinitionProperties.md) |  | [optional] 
**sku** | **object** | The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_rule_set_definition import ManagedRuleSetDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleSetDefinition from a JSON string
managed_rule_set_definition_instance = ManagedRuleSetDefinition.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleSetDefinition.to_json())

# convert the object into a dict
managed_rule_set_definition_dict = managed_rule_set_definition_instance.to_dict()
# create an instance of ManagedRuleSetDefinition from a dict
managed_rule_set_definition_from_dict = ManagedRuleSetDefinition.from_dict(managed_rule_set_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


