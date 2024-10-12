# OperationMetricSpecificationDefinition

The definition of Azure Monitoring metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | Metric aggregation type. | [optional] 
**display_description** | **str** | Metric description. | [optional] 
**display_name** | **str** | Metric display name. | [optional] 
**internal_metric_name** | **str** | Internal metric name. | [optional] 
**name** | **str** | Metric name. | [optional] 
**unit** | **str** | Metric unit. | [optional] 

## Example

```python
from openapi_client.models.operation_metric_specification_definition import OperationMetricSpecificationDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetricSpecificationDefinition from a JSON string
operation_metric_specification_definition_instance = OperationMetricSpecificationDefinition.from_json(json)
# print the JSON string representation of the object
print(OperationMetricSpecificationDefinition.to_json())

# convert the object into a dict
operation_metric_specification_definition_dict = operation_metric_specification_definition_instance.to_dict()
# create an instance of OperationMetricSpecificationDefinition from a dict
operation_metric_specification_definition_from_dict = OperationMetricSpecificationDefinition.from_dict(operation_metric_specification_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


