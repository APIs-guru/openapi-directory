# ManualRuleGroup

A group name and a list of items from the source data that should be placed in the group with this name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_name** | [**ExtendedValue**](ExtendedValue.md) |  | [optional] 
**items** | [**List[ExtendedValue]**](ExtendedValue.md) | The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items may appear in at most one group within a given ManualRule. Items that do not appear in any group will appear on their own. | [optional] 

## Example

```python
from openapi_client.models.manual_rule_group import ManualRuleGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ManualRuleGroup from a JSON string
manual_rule_group_instance = ManualRuleGroup.from_json(json)
# print the JSON string representation of the object
print(ManualRuleGroup.to_json())

# convert the object into a dict
manual_rule_group_dict = manual_rule_group_instance.to_dict()
# create an instance of ManualRuleGroup from a dict
manual_rule_group_from_dict = ManualRuleGroup.from_dict(manual_rule_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


