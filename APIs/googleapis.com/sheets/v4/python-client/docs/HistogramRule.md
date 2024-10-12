# HistogramRule

Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from HistogramRule.start to HistogramRule.end are placed into groups of size HistogramRule.interval. In addition, all values below HistogramRule.start are placed in one group, and all values above HistogramRule.end are placed in another. Only HistogramRule.interval is required, though if HistogramRule.start and HistogramRule.end are both provided, HistogramRule.start must be less than HistogramRule.end. For example, a pivot table showing average purchase amount by age that has 50+ rows: +-----+-------------------+ | Age | AVERAGE of Amount | +-----+-------------------+ | 16 | $27.13 | | 17 | $5.24 | | 18 | $20.15 | ... +-----+-------------------+ could be turned into a pivot table that looks like the one below by applying a histogram group rule with a HistogramRule.start of 25, an HistogramRule.interval of 20, and an HistogramRule.end of 65. +-------------+-------------------+ | Grouped Age | AVERAGE of Amount | +-------------+-------------------+ | < 25 | $19.34 | | 25-45 | $31.43 | | 45-65 | $35.87 | | > 65 | $27.55 | +-------------+-------------------+ | Grand Total | $29.12 | +-------------+-------------------+

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **float** | The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single bucket. This field is optional. | [optional] 
**interval** | **float** | The size of the buckets that are created. Must be positive. | [optional] 
**start** | **float** | The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single bucket. This field is optional. | [optional] 

## Example

```python
from openapi_client.models.histogram_rule import HistogramRule

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramRule from a JSON string
histogram_rule_instance = HistogramRule.from_json(json)
# print the JSON string representation of the object
print(HistogramRule.to_json())

# convert the object into a dict
histogram_rule_dict = histogram_rule_instance.to_dict()
# create an instance of HistogramRule from a dict
histogram_rule_from_dict = HistogramRule.from_dict(histogram_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


