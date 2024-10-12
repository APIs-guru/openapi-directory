# MetricValue

The value of a metric along with its name and labels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | **str** | Base name for this metric. | [optional] 
**metric_labels** | **Dict[str, str]** | Optional. Set of metric labels for this metric. | [optional] 
**value_histogram** | [**DataflowHistogramValue**](DataflowHistogramValue.md) |  | [optional] 
**value_int64** | **str** | Integer value of this metric. | [optional] 

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


