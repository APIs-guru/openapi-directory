# OperationProperties

Extra Operation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_specification** | [**ServiceSpecification**](ServiceSpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_properties import OperationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationProperties from a JSON string
operation_properties_instance = OperationProperties.from_json(json)
# print the JSON string representation of the object
print(OperationProperties.to_json())

# convert the object into a dict
operation_properties_dict = operation_properties_instance.to_dict()
# create an instance of OperationProperties from a dict
operation_properties_from_dict = OperationProperties.from_dict(operation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


