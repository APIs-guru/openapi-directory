# OperationsDefinition

Definition object with the name and properties of an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**OperationsDisplayDefinition**](OperationsDisplayDefinition.md) |  | [optional] 
**name** | **str** | Name of the operation. | [optional] 

## Example

```python
from openapi_client.models.operations_definition import OperationsDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsDefinition from a JSON string
operations_definition_instance = OperationsDefinition.from_json(json)
# print the JSON string representation of the object
print(OperationsDefinition.to_json())

# convert the object into a dict
operations_definition_dict = operations_definition_instance.to_dict()
# create an instance of OperationsDefinition from a dict
operations_definition_from_dict = OperationsDefinition.from_dict(operations_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


