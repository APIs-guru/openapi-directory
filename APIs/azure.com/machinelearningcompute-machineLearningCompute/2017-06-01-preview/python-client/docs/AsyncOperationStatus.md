# AsyncOperationStatus

Azure async operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | The date time that the async operation finished. | [optional] [readonly] 
**error_info** | [**AsyncOperationErrorInfo**](AsyncOperationErrorInfo.md) |  | [optional] 
**id** | **str** | Async operation id. | [optional] 
**name** | **str** | Async operation name. | [optional] 
**percent_complete** | **float** | Async operation progress. | [optional] 
**provisioning_state** | **str** | Read Only: The provisioning state of the cluster. Valid values are Unknown, Provisioning, Succeeded, and Failed. | [optional] [readonly] 
**start_time** | **datetime** | The date time that the async operation started. | [optional] [readonly] 

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


