# OperationServiceSpecificationDefinition

The definition of Azure Monitoring metrics list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_specifications** | [**List[OperationMetricSpecificationDefinition]**](OperationMetricSpecificationDefinition.md) | A list of Azure Monitoring metrics definition. | [optional] 

## Example

```python
from openapi_client.models.operation_service_specification_definition import OperationServiceSpecificationDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of OperationServiceSpecificationDefinition from a JSON string
operation_service_specification_definition_instance = OperationServiceSpecificationDefinition.from_json(json)
# print the JSON string representation of the object
print(OperationServiceSpecificationDefinition.to_json())

# convert the object into a dict
operation_service_specification_definition_dict = operation_service_specification_definition_instance.to_dict()
# create an instance of OperationServiceSpecificationDefinition from a dict
operation_service_specification_definition_from_dict = OperationServiceSpecificationDefinition.from_dict(operation_service_specification_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


