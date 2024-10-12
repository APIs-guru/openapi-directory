# MetricSpecificationV1

Metric specification version 1.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | Metric aggregation type. | [optional] 
**category** | **str** | Metric category. | [optional] 
**dimensions** | [**List[MetricDimensionV1]**](MetricDimensionV1.md) | Metric dimensions, other than default dimension which is resource. | [optional] 
**display_description** | **str** | Description of the metric to be displayed. | [optional] 
**display_name** | **str** | Display name of the metric. | [optional] 
**fill_gap_with_zero** | **bool** | Set true to fill the gaps with zero. | [optional] 
**name** | **str** | Name of the metric. | [optional] 
**resource_id_dimension_name_override** | **str** | Resource name override. | [optional] 
**supported_aggregation_types** | **List[str]** | Support metric aggregation type. | [optional] 
**supported_time_grain_types** | **List[str]** | Support granularity of metrics. | [optional] 
**unit** | **str** | Metric units. | [optional] 

## Example

```python
from openapi_client.models.metric_specification_v1 import MetricSpecificationV1

# TODO update the JSON string below
json = "{}"
# create an instance of MetricSpecificationV1 from a JSON string
metric_specification_v1_instance = MetricSpecificationV1.from_json(json)
# print the JSON string representation of the object
print(MetricSpecificationV1.to_json())

# convert the object into a dict
metric_specification_v1_dict = metric_specification_v1_instance.to_dict()
# create an instance of MetricSpecificationV1 from a dict
metric_specification_v1_from_dict = MetricSpecificationV1.from_dict(metric_specification_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


