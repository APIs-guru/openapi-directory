# ShowbackRuleProperties

The properties of a showback rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | The time when the showback rule was created. | [optional] [readonly] 
**deprecation_time** | **datetime** | The current time when showback rule was deprecate. | [optional] [readonly] 
**description** | **str** | Description of a showback rule. | [optional] 
**modification_time** | **datetime** | The current status when showback rule was modified. | [optional] [readonly] 
**rule_type** | **str** | The rule type of the showback rule solution. | 
**scopes** | [**List[Scope]**](Scope.md) | List of authorized assigned scopes. | [optional] 
**status** | **str** | The current status of the showback rule. | [optional] 
**version** | **int** | The current version of showback rule. | [optional] [readonly] 

## Example

```python
from openapi_client.models.showback_rule_properties import ShowbackRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ShowbackRuleProperties from a JSON string
showback_rule_properties_instance = ShowbackRuleProperties.from_json(json)
# print the JSON string representation of the object
print(ShowbackRuleProperties.to_json())

# convert the object into a dict
showback_rule_properties_dict = showback_rule_properties_instance.to_dict()
# create an instance of ShowbackRuleProperties from a dict
showback_rule_properties_from_dict = ShowbackRuleProperties.from_dict(showback_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


