# OperationDefinition

The definition of a container registry operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**OperationDisplayDefinition**](OperationDisplayDefinition.md) |  | [optional] 
**name** | **str** | Operation name: {provider}/{resource}/{operation}. | [optional] 

## Example

```python
from openapi_client.models.operation_definition import OperationDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDefinition from a JSON string
operation_definition_instance = OperationDefinition.from_json(json)
# print the JSON string representation of the object
print(OperationDefinition.to_json())

# convert the object into a dict
operation_definition_dict = operation_definition_instance.to_dict()
# create an instance of OperationDefinition from a dict
operation_definition_from_dict = OperationDefinition.from_dict(operation_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


