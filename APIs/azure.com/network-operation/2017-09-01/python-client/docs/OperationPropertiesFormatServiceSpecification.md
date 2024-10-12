# OperationPropertiesFormatServiceSpecification

Specification of the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_specifications** | [**List[LogSpecification]**](LogSpecification.md) | Operation log specification. | [optional] 
**metric_specifications** | [**List[MetricSpecification]**](MetricSpecification.md) | Operation service specification. | [optional] 

## Example

```python
from openapi_client.models.operation_properties_format_service_specification import OperationPropertiesFormatServiceSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of OperationPropertiesFormatServiceSpecification from a JSON string
operation_properties_format_service_specification_instance = OperationPropertiesFormatServiceSpecification.from_json(json)
# print the JSON string representation of the object
print(OperationPropertiesFormatServiceSpecification.to_json())

# convert the object into a dict
operation_properties_format_service_specification_dict = operation_properties_format_service_specification_instance.to_dict()
# create an instance of OperationPropertiesFormatServiceSpecification from a dict
operation_properties_format_service_specification_from_dict = OperationPropertiesFormatServiceSpecification.from_dict(operation_properties_format_service_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


