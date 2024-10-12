# MetricData

The metric data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | The average of all sample for the given instance | 
**count** | **int** | The count of samples of the metric data available for the given instance | 
**maximum** | **float** | The maximum of all samples available | 
**minimum** | **float** | The minimum of all samples available | 
**sum** | **float** | The sum of all the samples available in the given instance of time for the specific metric data | 
**time_stamp** | **datetime** | The time when the metric data is fetched | 

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


