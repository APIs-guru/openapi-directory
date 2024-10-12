# OperationDisplayDefinition

Information about the REST operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the REST operation. | [optional] 
**operation** | **str** | Type of REST operation. | [optional] 
**provider** | **str** | Provider of the REST operation. | [optional] 
**resource** | **str** | Resource returned by the REST operation. | [optional] 

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


