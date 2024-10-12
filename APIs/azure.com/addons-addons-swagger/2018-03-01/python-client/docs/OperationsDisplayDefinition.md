# OperationsDisplayDefinition

Display object with properties of the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the operation. | [optional] 
**operation** | **str** | Short description of the operation. | [optional] 
**provider** | **str** | Resource provider of the operation. | [optional] 
**resource** | **str** | Resource for the operation. | [optional] 

## Example

```python
from openapi_client.models.operations_display_definition import OperationsDisplayDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsDisplayDefinition from a JSON string
operations_display_definition_instance = OperationsDisplayDefinition.from_json(json)
# print the JSON string representation of the object
print(OperationsDisplayDefinition.to_json())

# convert the object into a dict
operations_display_definition_dict = operations_display_definition_instance.to_dict()
# create an instance of OperationsDisplayDefinition from a dict
operations_display_definition_from_dict = OperationsDisplayDefinition.from_dict(operations_display_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


