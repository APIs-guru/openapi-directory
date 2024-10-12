# OperationMetricSpecification

Details about an operation related to metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | The type of metric aggregation. | [optional] 
**availabilities** | [**List[OperationMetricAvailability]**](OperationMetricAvailability.md) | Defines how often data for metrics becomes available. | [optional] 
**dimensions** | [**List[OperationMetricDimension]**](OperationMetricDimension.md) | Defines the metric dimension. | [optional] 
**display_description** | **str** | The description of the metric. | [optional] 
**display_name** | **str** | Localized display name of the metric. | [optional] 
**enable_regional_mdm_account** | **str** | Whether or not the service is using regional MDM accounts. | [optional] 
**name** | **str** | The name of the metric. | [optional] 
**source_mdm_account** | **str** | The name of the MDM account. | [optional] 
**source_mdm_namespace** | **str** | The name of the MDM namespace. | [optional] 
**unit** | **str** | The unit that the metric is measured in. | [optional] 

## Example

```python
from openapi_client.models.operation_metric_specification import OperationMetricSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetricSpecification from a JSON string
operation_metric_specification_instance = OperationMetricSpecification.from_json(json)
# print the JSON string representation of the object
print(OperationMetricSpecification.to_json())

# convert the object into a dict
operation_metric_specification_dict = operation_metric_specification_instance.to_dict()
# create an instance of OperationMetricSpecification from a dict
operation_metric_specification_from_dict = OperationMetricSpecification.from_dict(operation_metric_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


