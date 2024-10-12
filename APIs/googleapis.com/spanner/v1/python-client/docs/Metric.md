# Metric

A message representing the actual monitoring data, values for each key bucket over time, of a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **str** | The aggregation function used to aggregate each key bucket | [optional] 
**category** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**derived** | [**DerivedMetric**](DerivedMetric.md) |  | [optional] 
**display_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**has_nonzero_data** | **bool** | Whether the metric has any non-zero data. | [optional] 
**hot_value** | **float** | The value that is considered hot for the metric. On a per metric basis hotness signals high utilization and something that might potentially be a cause for concern by the end user. hot_value is used to calibrate and scale visual color scales. | [optional] 
**indexed_hot_keys** | [**Dict[str, IndexedHotKey]**](IndexedHotKey.md) | The (sparse) mapping from time index to an IndexedHotKey message, representing those time intervals for which there are hot keys. | [optional] 
**indexed_key_range_infos** | [**Dict[str, IndexedKeyRangeInfos]**](IndexedKeyRangeInfos.md) | The (sparse) mapping from time interval index to an IndexedKeyRangeInfos message, representing those time intervals for which there are informational messages concerning key ranges. | [optional] 
**info** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**matrix** | [**MetricMatrix**](MetricMatrix.md) |  | [optional] 
**unit** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**visible** | **bool** | Whether the metric is visible to the end user. | [optional] 

## Example

```python
from openapi_client.models.metric import Metric

# TODO update the JSON string below
json = "{}"
# create an instance of Metric from a JSON string
metric_instance = Metric.from_json(json)
# print the JSON string representation of the object
print(Metric.to_json())

# convert the object into a dict
metric_dict = metric_instance.to_dict()
# create an instance of Metric from a dict
metric_from_dict = Metric.from_dict(metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


