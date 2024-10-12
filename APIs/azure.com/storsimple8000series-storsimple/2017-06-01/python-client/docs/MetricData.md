# MetricData

The metric data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | The average of all samples at the time stamp. | [optional] 
**count** | **int** | The count of all samples at the time stamp. | [optional] 
**maximum** | **float** | The maximum of all samples at the time stamp. | [optional] 
**minimum** | **float** | The minimum of all samples at the time stamp. | [optional] 
**sum** | **float** | The sum of all samples at the time stamp. | [optional] 
**time_stamp** | **datetime** | The time stamp of the metric data. | [optional] 

## Example

```python
from openapi_client.models.metric_data import MetricData

# TODO update the JSON string below
json = "{}"
# create an instance of MetricData from a JSON string
metric_data_instance = MetricData.from_json(json)
# print the JSON string representation of the object
print(MetricData.to_json())

# convert the object into a dict
metric_data_dict = metric_data_instance.to_dict()
# create an instance of MetricData from a dict
metric_data_from_dict = MetricData.from_dict(metric_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


