# OperationPropertiesFormat

Description of operation properties format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_specification** | [**OperationPropertiesFormatServiceSpecification**](OperationPropertiesFormatServiceSpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_properties_format import OperationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of OperationPropertiesFormat from a JSON string
operation_properties_format_instance = OperationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(OperationPropertiesFormat.to_json())

# convert the object into a dict
operation_properties_format_dict = operation_properties_format_instance.to_dict()
# create an instance of OperationPropertiesFormat from a dict
operation_properties_format_from_dict = OperationPropertiesFormat.from_dict(operation_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


