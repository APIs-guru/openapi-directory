# PivotGroupRule

An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_time_rule** | [**DateTimeRule**](DateTimeRule.md) |  | [optional] 
**histogram_rule** | [**HistogramRule**](HistogramRule.md) |  | [optional] 
**manual_rule** | [**ManualRule**](ManualRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.pivot_group_rule import PivotGroupRule

# TODO update the JSON string below
json = "{}"
# create an instance of PivotGroupRule from a JSON string
pivot_group_rule_instance = PivotGroupRule.from_json(json)
# print the JSON string representation of the object
print(PivotGroupRule.to_json())

# convert the object into a dict
pivot_group_rule_dict = pivot_group_rule_instance.to_dict()
# create an instance of PivotGroupRule from a dict
pivot_group_rule_from_dict = PivotGroupRule.from_dict(pivot_group_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


