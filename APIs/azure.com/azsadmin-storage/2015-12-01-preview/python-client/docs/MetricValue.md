# MetricValue

Metric value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Average value of metric. | [optional] [readonly] 
**count** | **int** | Count of metric values. | [optional] [readonly] 
**maximum** | **float** | Maximum value of metric. | [optional] [readonly] 
**minimum** | **float** | Minimum value of metric. | [optional] [readonly] 
**properties** | **str** | Metric value properties. | [optional] [readonly] 
**time_stamp** | **datetime** | Timestamp of metric value. | [optional] [readonly] 
**total** | **float** | Total value of metric. | [optional] [readonly] 

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


