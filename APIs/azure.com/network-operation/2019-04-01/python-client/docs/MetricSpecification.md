# MetricSpecification

Description of metrics specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | The aggregation type. | [optional] 
**availabilities** | [**List[Availability]**](Availability.md) | List of availability. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | List of dimensions. | [optional] 
**display_description** | **str** | The description of the metric. | [optional] 
**display_name** | **str** | The display name of the metric. | [optional] 
**enable_regional_mdm_account** | **bool** | Whether regional MDM account enabled. | [optional] 
**fill_gap_with_zero** | **bool** | Whether gaps would be filled with zeros. | [optional] 
**is_internal** | **bool** | Whether the metric is internal. | [optional] 
**metric_filter_pattern** | **str** | Pattern for the filter of the metric. | [optional] 
**name** | **str** | The name of the metric. | [optional] 
**resource_id_dimension_name_override** | **str** | The resource Id dimension name override. | [optional] 
**source_mdm_account** | **str** | The source MDM account. | [optional] 
**source_mdm_namespace** | **str** | The source MDM namespace. | [optional] 
**unit** | **str** | Units the metric to be displayed in. | [optional] 

## Example

```python
from openapi_client.models.metric_specification import MetricSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of MetricSpecification from a JSON string
metric_specification_instance = MetricSpecification.from_json(json)
# print the JSON string representation of the object
print(MetricSpecification.to_json())

# convert the object into a dict
metric_specification_dict = metric_specification_instance.to_dict()
# create an instance of MetricSpecification from a dict
metric_specification_from_dict = MetricSpecification.from_dict(metric_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


