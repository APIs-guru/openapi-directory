# RuleCondition

The condition that results in the alert rule being activated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**RuleDataSource**](RuleDataSource.md) |  | [optional] 
**odata_type** | **str** | specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric). | 

## Example

```python
from openapi_client.models.rule_condition import RuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of RuleCondition from a JSON string
rule_condition_instance = RuleCondition.from_json(json)
# print the JSON string representation of the object
print(RuleCondition.to_json())

# convert the object into a dict
rule_condition_dict = rule_condition_instance.to_dict()
# create an instance of RuleCondition from a dict
rule_condition_from_dict = RuleCondition.from_dict(rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


