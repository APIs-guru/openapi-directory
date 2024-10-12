# AutomationTriggeringRule

A rule which is evaluated upon event interception. The rule is configured by comparing a specific value from the event model to an expected value. This comparison is done by using one of the supported operators set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_value** | **str** | The expected value. | [optional] 
**operator** | **str** | A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType. | [optional] 
**property_j_path** | **str** | The JPath of the entity model property that should be checked. | [optional] 
**property_type** | **str** | The data type of the compared operands (string, integer, floating point number or a boolean [true/false]] | [optional] 

## Example

```python
from openapi_client.models.automation_triggering_rule import AutomationTriggeringRule

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationTriggeringRule from a JSON string
automation_triggering_rule_instance = AutomationTriggeringRule.from_json(json)
# print the JSON string representation of the object
print(AutomationTriggeringRule.to_json())

# convert the object into a dict
automation_triggering_rule_dict = automation_triggering_rule_instance.to_dict()
# create an instance of AutomationTriggeringRule from a dict
automation_triggering_rule_from_dict = AutomationTriggeringRule.from_dict(automation_triggering_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


