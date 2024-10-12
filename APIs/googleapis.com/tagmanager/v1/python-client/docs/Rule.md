# Rule

Represents a Google Tag Manager Rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**condition** | [**List[Condition]**](Condition.md) | The list of conditions that make up this rule (implicit AND between them). @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Rule as computed at storage time. This value is recomputed whenever the rule is modified. | [optional] 
**name** | **str** | Rule display name. @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update | [optional] 
**notes** | **str** | User notes on how to apply this rule in the container. @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update | [optional] 
**rule_id** | **str** | The Rule ID uniquely identifies the GTM Rule. | [optional] 

## Example

```python
from openapi_client.models.rule import Rule

# TODO update the JSON string below
json = "{}"
# create an instance of Rule from a JSON string
rule_instance = Rule.from_json(json)
# print the JSON string representation of the object
print(Rule.to_json())

# convert the object into a dict
rule_dict = rule_instance.to_dict()
# create an instance of Rule from a dict
rule_from_dict = Rule.from_dict(rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


