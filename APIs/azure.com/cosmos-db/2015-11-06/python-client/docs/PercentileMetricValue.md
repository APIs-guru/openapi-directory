# PercentileMetricValue

Represents percentile metrics values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**p10** | **float** | The 10th percentile value for the metric. | [optional] [readonly] 
**p25** | **float** | The 25th percentile value for the metric. | [optional] [readonly] 
**p50** | **float** | The 50th percentile value for the metric. | [optional] [readonly] 
**p75** | **float** | The 75th percentile value for the metric. | [optional] [readonly] 
**p90** | **float** | The 90th percentile value for the metric. | [optional] [readonly] 
**p95** | **float** | The 95th percentile value for the metric. | [optional] [readonly] 
**p99** | **float** | The 99th percentile value for the metric. | [optional] [readonly] 
**count** | **float** | The number of values for the metric. | [optional] [readonly] 
**average** | **float** | The average value of the metric. | [optional] [readonly] 
**maximum** | **float** | The max value of the metric. | [optional] [readonly] 
**minimum** | **float** | The min value of the metric. | [optional] [readonly] 
**timestamp** | **datetime** | The metric timestamp (ISO-8601 format). | [optional] [readonly] 
**total** | **float** | The total value of the metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.percentile_metric_value import PercentileMetricValue

# TODO update the JSON string below
json = "{}"
# create an instance of PercentileMetricValue from a JSON string
percentile_metric_value_instance = PercentileMetricValue.from_json(json)
# print the JSON string representation of the object
print(PercentileMetricValue.to_json())

# convert the object into a dict
percentile_metric_value_dict = percentile_metric_value_instance.to_dict()
# create an instance of PercentileMetricValue from a dict
percentile_metric_value_from_dict = PercentileMetricValue.from_dict(percentile_metric_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


