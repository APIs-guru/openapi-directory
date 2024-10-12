# MetricValue

Represents metrics values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **float** | The number of values for the metric. | [optional] [readonly] 
**average** | **float** | The average value of the metric. | [optional] [readonly] 
**maximum** | **float** | The max value of the metric. | [optional] [readonly] 
**minimum** | **float** | The min value of the metric. | [optional] [readonly] 
**timestamp** | **datetime** | The metric timestamp (ISO-8601 format). | [optional] [readonly] 
**total** | **float** | The total value of the metric. | [optional] [readonly] 

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


