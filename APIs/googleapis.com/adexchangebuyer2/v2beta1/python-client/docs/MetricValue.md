# MetricValue

A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The expected value of the metric. | [optional] 
**variance** | **str** | The variance (for example, square of the standard deviation) of the metric value. If value is exact, variance is 0. Can be used to calculate margin of error as a percentage of value, using the following formula, where Z is the standard constant that depends on the preferred size of the confidence interval (for example, for 90% confidence interval, use Z &#x3D; 1.645): marginOfError &#x3D; 100 * Z * sqrt(variance) / value | [optional] 

## Example

```python
from openapi_client.models.metric_value import MetricValue

# TODO update the JSON string below
json = "{}"
# create an instance of MetricValue from a JSON string
metric_value_instance = MetricValue.from_json(json)
# print the JSON string representation of the object
print(MetricValue.to_json())

# convert the object into a dict
metric_value_dict = metric_value_instance.to_dict()
# create an instance of MetricValue from a dict
metric_value_from_dict = MetricValue.from_dict(metric_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


