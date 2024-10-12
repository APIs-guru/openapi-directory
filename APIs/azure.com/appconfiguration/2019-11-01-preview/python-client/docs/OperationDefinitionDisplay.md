# OperationDefinitionDisplay

The display information for a configuration store operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description for the operation. | [optional] 
**operation** | **str** | The operation that users can perform. | [optional] 
**provider** | **str** | The resource provider name: Microsoft App Configuration.\&quot; | [optional] [readonly] 
**resource** | **str** | The resource on which the operation is performed. | [optional] 

## Example

```python
from openapi_client.models.operation_definition_display import OperationDefinitionDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDefinitionDisplay from a JSON string
operation_definition_display_instance = OperationDefinitionDisplay.from_json(json)
# print the JSON string representation of the object
print(OperationDefinitionDisplay.to_json())

# convert the object into a dict
operation_definition_display_dict = operation_definition_display_instance.to_dict()
# create an instance of OperationDefinitionDisplay from a dict
operation_definition_display_from_dict = OperationDefinitionDisplay.from_dict(operation_definition_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


