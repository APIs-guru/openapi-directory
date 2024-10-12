# MetricDefinition

The monitoring metric definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the metric. | [optional] 
**dimensions** | [**List[MetricDimension]**](MetricDimension.md) | The available metric dimensions. | [optional] 
**metric_availabilities** | [**List[MetricAvailablity]**](MetricAvailablity.md) | The available metric granularities. | [optional] 
**name** | [**MetricName**](MetricName.md) |  | [optional] 
**primary_aggregation_type** | **str** | The metric aggregation type. | [optional] 
**resource_id** | **str** | The metric source ID. | [optional] 
**type** | **str** | The metric definition type. | [optional] 
**unit** | **str** | The metric unit. | [optional] 

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


