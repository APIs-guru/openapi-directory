# OperationPropertiesDefinition

The definition of Azure Monitoring properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_specification** | [**OperationServiceSpecificationDefinition**](OperationServiceSpecificationDefinition.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_properties_definition import OperationPropertiesDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of OperationPropertiesDefinition from a JSON string
operation_properties_definition_instance = OperationPropertiesDefinition.from_json(json)
# print the JSON string representation of the object
print(OperationPropertiesDefinition.to_json())

# convert the object into a dict
operation_properties_definition_dict = operation_properties_definition_instance.to_dict()
# create an instance of OperationPropertiesDefinition from a dict
operation_properties_definition_from_dict = OperationPropertiesDefinition.from_dict(operation_properties_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


