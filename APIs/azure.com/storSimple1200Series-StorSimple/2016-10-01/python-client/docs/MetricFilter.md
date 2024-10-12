# MetricFilter

class representing the filters to be passed while fetching metrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | endtime for fetching metrics | [optional] 
**name** | [**MetricNameFilter**](MetricNameFilter.md) |  | [optional] 
**start_time** | **datetime** | starttime for fetching metrics | [optional] 
**time_grain** | **str** | timegrain of the metrics | [optional] 

## Example

```python
from openapi_client.models.metric_filter import MetricFilter

# TODO update the JSON string below
json = "{}"
# create an instance of MetricFilter from a JSON string
metric_filter_instance = MetricFilter.from_json(json)
# print the JSON string representation of the object
print(MetricFilter.to_json())

# convert the object into a dict
metric_filter_dict = metric_filter_instance.to_dict()
# create an instance of MetricFilter from a dict
metric_filter_from_dict = MetricFilter.from_dict(metric_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


