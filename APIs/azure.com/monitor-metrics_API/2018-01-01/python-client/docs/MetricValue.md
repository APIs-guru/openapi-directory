# MetricValue

Represents a metric value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | the average value in the time range. | [optional] 
**count** | **float** | the number of samples in the time range. Can be used to determine the number of values that contributed to the average value. | [optional] 
**maximum** | **float** | the greatest value in the time range. | [optional] 
**minimum** | **float** | the least value in the time range. | [optional] 
**time_stamp** | **datetime** | the timestamp for the metric value in ISO 8601 format. | 
**total** | **float** | the sum of all of the values in the time range. | [optional] 

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


