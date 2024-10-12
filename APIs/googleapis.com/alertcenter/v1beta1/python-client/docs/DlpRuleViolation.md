# DlpRuleViolation

Alerts that get triggered on violations of Data Loss Prevention (DLP) rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_violation_info** | [**RuleViolationInfo**](RuleViolationInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.dlp_rule_violation import DlpRuleViolation

# TODO update the JSON string below
json = "{}"
# create an instance of DlpRuleViolation from a JSON string
dlp_rule_violation_instance = DlpRuleViolation.from_json(json)
# print the JSON string representation of the object
print(DlpRuleViolation.to_json())

# convert the object into a dict
dlp_rule_violation_dict = dlp_rule_violation_instance.to_dict()
# create an instance of DlpRuleViolation from a dict
dlp_rule_violation_from_dict = DlpRuleViolation.from_dict(dlp_rule_violation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


