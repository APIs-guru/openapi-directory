# OperationStatus

Operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Operation end time. Format: ISO-8601. | [optional] 
**error** | [**OperationStatusError**](OperationStatusError.md) |  | [optional] 
**id** | **str** | ID of the operation. | [optional] 
**name** | **str** | Name of the operation. | [optional] 
**properties** | [**OperationStatusExtendedInfo**](OperationStatusExtendedInfo.md) |  | [optional] 
**start_time** | **datetime** | Operation start time. Format: ISO-8601. | [optional] 
**status** | **str** | Operation status. | [optional] 

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


