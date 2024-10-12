# AsyncOperationResult

Result of a long running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ErrorMesssage**](ErrorMesssage.md) |  | [optional] 
**status** | **str** | current status of a long running operation. | [optional] 

## Example

```python
from openapi_client.models.async_operation_result import AsyncOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncOperationResult from a JSON string
async_operation_result_instance = AsyncOperationResult.from_json(json)
# print the JSON string representation of the object
print(AsyncOperationResult.to_json())

# convert the object into a dict
async_operation_result_dict = async_operation_result_instance.to_dict()
# create an instance of AsyncOperationResult from a dict
async_operation_result_from_dict = AsyncOperationResult.from_dict(async_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


