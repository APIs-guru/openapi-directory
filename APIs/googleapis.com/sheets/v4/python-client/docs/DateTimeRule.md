# DateTimeRule

Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of date-time grouping to apply. | [optional] 

## Example

```python
from openapi_client.models.date_time_rule import DateTimeRule

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeRule from a JSON string
date_time_rule_instance = DateTimeRule.from_json(json)
# print the JSON string representation of the object
print(DateTimeRule.to_json())

# convert the object into a dict
date_time_rule_dict = date_time_rule_instance.to_dict()
# create an instance of DateTimeRule from a dict
date_time_rule_from_dict = DateTimeRule.from_dict(date_time_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


