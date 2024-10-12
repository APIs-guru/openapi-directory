# MetricDefinition

Monitoring metric definition represents the metadata of the metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[MetricDimension]**](MetricDimension.md) | The supported dimensions | 
**metric_availabilities** | [**List[MetricAvailablity]**](MetricAvailablity.md) | The available metric granularities | 
**name** | [**MetricName**](MetricName.md) |  | 
**primary_aggregation_type** | **str** | The metric aggregation type | 
**resource_id** | **str** | The metric source id | 
**type** | **str** | The metric definition type | 
**unit** | **str** | The metric unit | 

## Example

```python
from openapi_client.models.metric_definition import MetricDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDefinition from a JSON string
metric_definition_instance = MetricDefinition.from_json(json)
# print the JSON string representation of the object
print(MetricDefinition.to_json())

# convert the object into a dict
metric_definition_dict = metric_definition_instance.to_dict()
# create an instance of MetricDefinition from a dict
metric_definition_from_dict = MetricDefinition.from_dict(metric_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


