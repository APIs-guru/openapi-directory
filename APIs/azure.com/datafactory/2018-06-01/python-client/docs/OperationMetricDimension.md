# OperationMetricDimension

Defines the metric dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the metric dimension. | [optional] 
**name** | **str** | The name of the dimension for the metric. | [optional] 
**to_be_exported_for_shoebox** | **bool** | Whether the dimension should be exported to Azure Monitor. | [optional] 

## Example

```python
from openapi_client.models.operation_metric_dimension import OperationMetricDimension

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetricDimension from a JSON string
operation_metric_dimension_instance = OperationMetricDimension.from_json(json)
# print the JSON string representation of the object
print(OperationMetricDimension.to_json())

# convert the object into a dict
operation_metric_dimension_dict = operation_metric_dimension_instance.to_dict()
# create an instance of OperationMetricDimension from a dict
operation_metric_dimension_from_dict = OperationMetricDimension.from_dict(operation_metric_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


