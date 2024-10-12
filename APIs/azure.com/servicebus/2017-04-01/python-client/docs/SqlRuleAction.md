# SqlRuleAction

Represents set of actions written in SQL language-based syntax that is performed against a ServiceBus.Messaging.BrokeredMessage 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_level** | **int** | This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20. | [optional] 
**requires_preprocessing** | **bool** | Value that indicates whether the rule action requires preprocessing. | [optional] [default to True]
**sql_expression** | **str** | SQL expression. e.g. MyProperty&#x3D;&#39;ABC&#39; | [optional] 

## Example

```python
from openapi_client.models.sql_rule_action import SqlRuleAction

# TODO update the JSON string below
json = "{}"
# create an instance of SqlRuleAction from a JSON string
sql_rule_action_instance = SqlRuleAction.from_json(json)
# print the JSON string representation of the object
print(SqlRuleAction.to_json())

# convert the object into a dict
sql_rule_action_dict = sql_rule_action_instance.to_dict()
# create an instance of SqlRuleAction from a dict
sql_rule_action_from_dict = SqlRuleAction.from_dict(sql_rule_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


