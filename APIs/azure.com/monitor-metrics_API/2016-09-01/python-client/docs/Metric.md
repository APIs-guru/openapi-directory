# Metric

A set of metric values in a time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MetricValue]**](MetricValue.md) | Array of data points representing the metric values. | 
**id** | **str** | the id, resourceId, of the metric. | [optional] 
**name** | [**LocalizableString**](LocalizableString.md) |  | 
**type** | **str** | the resource type of the metric resource. | [optional] 
**unit** | [**Unit**](Unit.md) |  | 

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


