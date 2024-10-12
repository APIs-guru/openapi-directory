# MetricDefinition

Metric definition class specifies the metadata for a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[LocalizableString]**](LocalizableString.md) | the name and the display name of the dimension, i.e. it is a localizable string. | [optional] 
**id** | **str** | the resource identifier of the metric definition. | [optional] 
**is_dimension_required** | **bool** | Flag to indicate whether the dimension is required. | [optional] 
**metric_availabilities** | [**List[MetricAvailability]**](MetricAvailability.md) | the collection of what aggregation intervals are available to be queried. | [optional] 
**name** | [**LocalizableString**](LocalizableString.md) |  | [optional] 
**namespace** | **str** | the namespace the metric belongs to. | [optional] 
**primary_aggregation_type** | [**AggregationType**](AggregationType.md) |  | [optional] 
**resource_id** | **str** | the resource identifier of the resource that emitted the metric. | [optional] 
**supported_aggregation_types** | [**List[AggregationType]**](AggregationType.md) | the collection of what aggregation types are supported. | [optional] 
**unit** | [**Unit**](Unit.md) |  | [optional] 

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


