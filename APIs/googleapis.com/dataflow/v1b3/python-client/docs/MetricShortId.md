# MetricShortId

The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_index** | **int** | The index of the corresponding metric in the ReportWorkItemStatusRequest. Required. | [optional] 
**short_id** | **str** | The service-generated short identifier for the metric. | [optional] 

## Example

```python
from openapi_client.models.metric_short_id import MetricShortId

# TODO update the JSON string below
json = "{}"
# create an instance of MetricShortId from a JSON string
metric_short_id_instance = MetricShortId.from_json(json)
# print the JSON string representation of the object
print(MetricShortId.to_json())

# convert the object into a dict
metric_short_id_dict = metric_short_id_instance.to_dict()
# create an instance of MetricShortId from a dict
metric_short_id_from_dict = MetricShortId.from_dict(metric_short_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


