# RuleViolationCause



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **str** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rule_violation_cause import RuleViolationCause

# TODO update the JSON string below
json = "{}"
# create an instance of RuleViolationCause from a JSON string
rule_violation_cause_instance = RuleViolationCause.from_json(json)
# print the JSON string representation of the object
print(RuleViolationCause.to_json())

# convert the object into a dict
rule_violation_cause_dict = rule_violation_cause_instance.to_dict()
# create an instance of RuleViolationCause from a dict
rule_violation_cause_from_dict = RuleViolationCause.from_dict(rule_violation_cause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


