# Operation

Record to track long running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_timestamp** | **str** | Timestamp when the operation was created. | [optional] 
**error_response** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 
**last_action_timestamp** | **str** | Timestamp when the current state was entered. | [optional] 
**operation_id** | **str** | Operation Id. | [optional] 
**operation_state** | [**OperationState**](OperationState.md) |  | [optional] 
**resource_location** | **str** | Relative URI to the target resource location for completed resources. | [optional] 
**user_id** | **str** | User Id | [optional] 

## Example

```python
from openapi_client.models.operation import Operation

# TODO update the JSON string below
json = "{}"
# create an instance of Operation from a JSON string
operation_instance = Operation.from_json(json)
# print the JSON string representation of the object
print(Operation.to_json())

# convert the object into a dict
operation_dict = operation_instance.to_dict()
# create an instance of Operation from a dict
operation_from_dict = Operation.from_dict(operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


