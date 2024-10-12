# ChartDateTimeRule

Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of date-time grouping to apply. | [optional] 

## Example

```python
from openapi_client.models.chart_date_time_rule import ChartDateTimeRule

# TODO update the JSON string below
json = "{}"
# create an instance of ChartDateTimeRule from a JSON string
chart_date_time_rule_instance = ChartDateTimeRule.from_json(json)
# print the JSON string representation of the object
print(ChartDateTimeRule.to_json())

# convert the object into a dict
chart_date_time_rule_dict = chart_date_time_rule_instance.to_dict()
# create an instance of ChartDateTimeRule from a dict
chart_date_time_rule_from_dict = ChartDateTimeRule.from_dict(chart_date_time_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


