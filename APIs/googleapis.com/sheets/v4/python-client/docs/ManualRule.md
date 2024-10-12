# ManualRule

Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population | +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 | ... +-----------+-------------------+

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[ManualRuleGroup]**](ManualRuleGroup.md) | The list of group names and the corresponding items from the source data that map to each group name. | [optional] 

## Example

```python
from openapi_client.models.manual_rule import ManualRule

# TODO update the JSON string below
json = "{}"
# create an instance of ManualRule from a JSON string
manual_rule_instance = ManualRule.from_json(json)
# print the JSON string representation of the object
print(ManualRule.to_json())

# convert the object into a dict
manual_rule_dict = manual_rule_instance.to_dict()
# create an instance of ManualRule from a dict
manual_rule_from_dict = ManualRule.from_dict(manual_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


