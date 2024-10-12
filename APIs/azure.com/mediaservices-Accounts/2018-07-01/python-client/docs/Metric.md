# Metric

A metric emitted by service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | The metric aggregation type | [optional] [readonly] 
**dimensions** | [**List[MetricDimension]**](MetricDimension.md) | The metric dimensions. | [optional] [readonly] 
**display_description** | **str** | The metric display description. | [optional] [readonly] 
**display_name** | **str** | The metric display name. | [optional] [readonly] 
**name** | **str** | The metric name. | [optional] [readonly] 
**unit** | **str** | The metric unit | [optional] [readonly] 

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


