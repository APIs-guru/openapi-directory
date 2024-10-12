# OperationStatus

Contains the OperationId, OperationState, and OperationType for user-induced operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | A GUID that identifies a call to this API.  This is also passed into the corresponding GetProgress API. | [optional] 
**state** | [**OperationState**](OperationState.md) |  | [optional] 
**type** | [**OperationType**](OperationType.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_status import OperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of OperationStatus from a JSON string
operation_status_instance = OperationStatus.from_json(json)
# print the JSON string representation of the object
print(OperationStatus.to_json())

# convert the object into a dict
operation_status_dict = operation_status_instance.to_dict()
# create an instance of OperationStatus from a dict
operation_status_from_dict = OperationStatus.from_dict(operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


