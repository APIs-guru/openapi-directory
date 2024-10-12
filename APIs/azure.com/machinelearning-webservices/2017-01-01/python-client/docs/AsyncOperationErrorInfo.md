# AsyncOperationErrorInfo

The error detail information for async operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] [readonly] 
**details** | [**List[AsyncOperationErrorInfo]**](AsyncOperationErrorInfo.md) | An array containing error information. | [optional] [readonly] 
**message** | **str** | The error message. | [optional] [readonly] 
**target** | **str** | The error target. | [optional] [readonly] 

## Example

```python
from openapi_client.models.async_operation_error_info import AsyncOperationErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncOperationErrorInfo from a JSON string
async_operation_error_info_instance = AsyncOperationErrorInfo.from_json(json)
# print the JSON string representation of the object
print(AsyncOperationErrorInfo.to_json())

# convert the object into a dict
async_operation_error_info_dict = async_operation_error_info_instance.to_dict()
# create an instance of AsyncOperationErrorInfo from a dict
async_operation_error_info_from_dict = AsyncOperationErrorInfo.from_dict(async_operation_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


