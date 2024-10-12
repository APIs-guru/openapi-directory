# ChartGroupRule

An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_time_rule** | [**ChartDateTimeRule**](ChartDateTimeRule.md) |  | [optional] 
**histogram_rule** | [**ChartHistogramRule**](ChartHistogramRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.chart_group_rule import ChartGroupRule

# TODO update the JSON string below
json = "{}"
# create an instance of ChartGroupRule from a JSON string
chart_group_rule_instance = ChartGroupRule.from_json(json)
# print the JSON string representation of the object
print(ChartGroupRule.to_json())

# convert the object into a dict
chart_group_rule_dict = chart_group_rule_instance.to_dict()
# create an instance of ChartGroupRule from a dict
chart_group_rule_from_dict = ChartGroupRule.from_dict(chart_group_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


