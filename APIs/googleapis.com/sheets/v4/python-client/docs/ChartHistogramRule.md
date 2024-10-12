# ChartHistogramRule

Allows you to organize numeric values in a source data column into buckets of constant size.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval_size** | **float** | The size of the buckets that are created. Must be positive. | [optional] 
**max_value** | **float** | The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value. | [optional] 
**min_value** | **float** | The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value. | [optional] 

## Example

```python
from openapi_client.models.chart_histogram_rule import ChartHistogramRule

# TODO update the JSON string below
json = "{}"
# create an instance of ChartHistogramRule from a JSON string
chart_histogram_rule_instance = ChartHistogramRule.from_json(json)
# print the JSON string representation of the object
print(ChartHistogramRule.to_json())

# convert the object into a dict
chart_histogram_rule_dict = chart_histogram_rule_instance.to_dict()
# create an instance of ChartHistogramRule from a dict
chart_histogram_rule_from_dict = ChartHistogramRule.from_dict(chart_histogram_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


