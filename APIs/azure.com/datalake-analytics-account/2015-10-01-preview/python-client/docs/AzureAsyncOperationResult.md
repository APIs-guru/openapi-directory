# AzureAsyncOperationResult

The response body contains the status of the specified asynchronous operation, indicating whether it has succeeded, is inprogress, or has failed. Note that this status is distinct from the HTTP status code returned for the Get Operation Status operation itself. If the asynchronous operation succeeded, the response body includes the HTTP status code for the successful request. If the asynchronous operation failed, the response body includes the HTTP status code for the failed request and error information regarding the failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Error**](Error.md) |  | [optional] 
**status** | **str** | the status of the AzureAsyncOperation | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_async_operation_result import AzureAsyncOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of AzureAsyncOperationResult from a JSON string
azure_async_operation_result_instance = AzureAsyncOperationResult.from_json(json)
# print the JSON string representation of the object
print(AzureAsyncOperationResult.to_json())

# convert the object into a dict
azure_async_operation_result_dict = azure_async_operation_result_instance.to_dict()
# create an instance of AzureAsyncOperationResult from a dict
azure_async_operation_result_from_dict = AzureAsyncOperationResult.from_dict(azure_async_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


