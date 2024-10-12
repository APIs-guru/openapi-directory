# OperationDisplayValue

Display information of an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Friendly description of the operation. | [optional] [readonly] 
**operation** | **str** | Friendly name of the operation. | [optional] [readonly] 
**provider** | **str** | Friendly name of the resource provider. | [optional] [readonly] 
**resource** | **str** | Friendly name of the resource type the operation applies to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_display_value import OperationDisplayValue

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDisplayValue from a JSON string
operation_display_value_instance = OperationDisplayValue.from_json(json)
# print the JSON string representation of the object
print(OperationDisplayValue.to_json())

# convert the object into a dict
operation_display_value_dict = operation_display_value_instance.to_dict()
# create an instance of OperationDisplayValue from a dict
operation_display_value_from_dict = OperationDisplayValue.from_dict(operation_display_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


