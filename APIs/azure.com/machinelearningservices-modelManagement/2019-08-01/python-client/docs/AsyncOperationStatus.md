# AsyncOperationStatus

The async operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | The async operation creation time (UTC). | [optional] 
**end_time** | **datetime** | The async operation end time (UTC)l | [optional] 
**error** | [**ModelErrorResponse**](ModelErrorResponse.md) |  | [optional] 
**id** | **str** | The async operation id. | [optional] 
**operation_details** | [**AsyncOperationDetails**](AsyncOperationDetails.md) |  | [optional] 
**operation_log** | **str** | The async operation log. | [optional] 
**operation_type** | **str** | The async operation type. | [optional] 
**parent_request_id** | **str** | The request id that created this operation | [optional] 
**resource_location** | **str** | The resource created/updated by the async operation. | [optional] 
**state** | **str** | The async operation state. | [optional] 

## Example

```python
from openapi_client.models.async_operation_status import AsyncOperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncOperationStatus from a JSON string
async_operation_status_instance = AsyncOperationStatus.from_json(json)
# print the JSON string representation of the object
print(AsyncOperationStatus.to_json())

# convert the object into a dict
async_operation_status_dict = async_operation_status_instance.to_dict()
# create an instance of AsyncOperationStatus from a dict
async_operation_status_from_dict = AsyncOperationStatus.from_dict(async_operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


