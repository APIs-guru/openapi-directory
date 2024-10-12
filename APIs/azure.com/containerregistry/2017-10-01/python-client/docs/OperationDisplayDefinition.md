# OperationDisplayDefinition

The display information for a container registry operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description for the operation. | [optional] 
**operation** | **str** | The operation that users can perform. | [optional] 
**provider** | **str** | The resource provider name: Microsoft.ContainerRegistry. | [optional] 
**resource** | **str** | The resource on which the operation is performed. | [optional] 

## Example

```python
from openapi_client.models.operation_display_definition import OperationDisplayDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDisplayDefinition from a JSON string
operation_display_definition_instance = OperationDisplayDefinition.from_json(json)
# print the JSON string representation of the object
print(OperationDisplayDefinition.to_json())

# convert the object into a dict
operation_display_definition_dict = operation_display_definition_instance.to_dict()
# create an instance of OperationDisplayDefinition from a dict
operation_display_definition_from_dict = OperationDisplayDefinition.from_dict(operation_display_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


