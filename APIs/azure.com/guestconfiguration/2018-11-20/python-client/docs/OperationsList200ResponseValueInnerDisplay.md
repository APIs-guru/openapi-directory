# OperationsList200ResponseValueInnerDisplay

Provider, Resource, Operation and description values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description about operation. | [optional] 
**operation** | **str** | Operation type: Read, write, delete, etc. | [optional] 
**provider** | **str** | Service provider: Microsoft.GuestConfiguration | [optional] 
**resource** | **str** | Resource on which the operation is performed:  For ex.  | [optional] 

## Example

```python
from openapi_client.models.operations_list200_response_value_inner_display import OperationsList200ResponseValueInnerDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsList200ResponseValueInnerDisplay from a JSON string
operations_list200_response_value_inner_display_instance = OperationsList200ResponseValueInnerDisplay.from_json(json)
# print the JSON string representation of the object
print(OperationsList200ResponseValueInnerDisplay.to_json())

# convert the object into a dict
operations_list200_response_value_inner_display_dict = operations_list200_response_value_inner_display_instance.to_dict()
# create an instance of OperationsList200ResponseValueInnerDisplay from a dict
operations_list200_response_value_inner_display_from_dict = OperationsList200ResponseValueInnerDisplay.from_dict(operations_list200_response_value_inner_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


