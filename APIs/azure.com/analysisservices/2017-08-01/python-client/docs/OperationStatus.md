# OperationStatus

The status of operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end time of the operation. | [optional] 
**error** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 
**id** | **str** | The operation Id. | [optional] 
**name** | **str** | The operation name. | [optional] 
**start_time** | **str** | The start time of the operation. | [optional] 
**status** | **str** | The status of the operation. | [optional] 

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


