# MetricMetadata

The metric meta data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name for the metric. | [optional] 
**groupings** | [**List[MetricGroup]**](MetricGroup.md) | The groupings for the metrics. | [optional] 
**is_default** | **bool** | Indicates if the metric is a default metric or not. | [optional] 
**is_dev_ops** | **bool** | Indicates if the metric is visible to DevOps or not. | [optional] 
**is_perf_counter** | **bool** | Indicates if the metric is a performance counter metric or not. | [optional] 
**kind** | **str** | Indicates whether the dashboard to represent the metric is a line, bar,pie, area or donut chart. | [optional] 
**max_value** | **int** | The maximum value. | [optional] 
**metric_name** | **str** | The metric name | [optional] 
**metrics_processor_class_name** | **str** | The name of the class which retrieve and process the metric. | [optional] 
**min_value** | **int** | The minimum value. | [optional] 
**value_kind** | **str** | Indicates if the metrics is a rate,value, percent or duration type. | [optional] 

## Example

```python
from openapi_client.models.metric_metadata import MetricMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MetricMetadata from a JSON string
metric_metadata_instance = MetricMetadata.from_json(json)
# print the JSON string representation of the object
print(MetricMetadata.to_json())

# convert the object into a dict
metric_metadata_dict = metric_metadata_instance.to_dict()
# create an instance of MetricMetadata from a dict
metric_metadata_from_dict = MetricMetadata.from_dict(metric_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


