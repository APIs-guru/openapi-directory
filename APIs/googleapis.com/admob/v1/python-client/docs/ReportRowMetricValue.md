# ReportRowMetricValue

Representation of a metric value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**double_value** | **float** | Double precision (approximate) decimal values. Rates are from 0 to 1. | [optional] 
**integer_value** | **str** | Metric integer value. | [optional] 
**micros_value** | **str** | Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros. | [optional] 

## Example

```python
from openapi_client.models.report_row_metric_value import ReportRowMetricValue

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRowMetricValue from a JSON string
report_row_metric_value_instance = ReportRowMetricValue.from_json(json)
# print the JSON string representation of the object
print(ReportRowMetricValue.to_json())

# convert the object into a dict
report_row_metric_value_dict = report_row_metric_value_instance.to_dict()
# create an instance of ReportRowMetricValue from a dict
report_row_metric_value_from_dict = ReportRowMetricValue.from_dict(report_row_metric_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


