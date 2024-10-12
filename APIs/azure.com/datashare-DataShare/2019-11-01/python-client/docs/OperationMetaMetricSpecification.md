# OperationMetaMetricSpecification

metric specifications for the operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | aggregation type of metric | [optional] 
**dimensions** | [**List[DimensionProperties]**](DimensionProperties.md) | properties for dimension | [optional] 
**display_description** | **str** | description of the metric | [optional] 
**display_name** | **str** | localized name of the metric | [optional] 
**enable_regional_mdm_account** | **str** | enable regional mdm account | [optional] 
**internal_metric_name** | **str** | internal metric name | [optional] 
**name** | **str** | name of the metric | [optional] 
**resource_id_dimension_name_override** | **str** | dimension name use to replace resource id if specified | [optional] 
**supported_aggregation_types** | **List[str]** | supported aggregation types | [optional] 
**supported_time_grain_types** | **List[str]** | supported time grain types | [optional] 
**unit** | **str** | units for the metric | [optional] 

## Example

```python
from openapi_client.models.operation_meta_metric_specification import OperationMetaMetricSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetaMetricSpecification from a JSON string
operation_meta_metric_specification_instance = OperationMetaMetricSpecification.from_json(json)
# print the JSON string representation of the object
print(OperationMetaMetricSpecification.to_json())

# convert the object into a dict
operation_meta_metric_specification_dict = operation_meta_metric_specification_instance.to_dict()
# create an instance of OperationMetaMetricSpecification from a dict
operation_meta_metric_specification_from_dict = OperationMetaMetricSpecification.from_dict(operation_meta_metric_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


