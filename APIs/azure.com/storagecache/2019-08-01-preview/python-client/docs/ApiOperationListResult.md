# ApiOperationListResult

Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[ApiOperation]**](ApiOperation.md) | List of Resource Provider operations supported by the Microsoft.StorageCache resource provider. | [optional] 

## Example

```python
from openapi_client.models.api_operation_list_result import ApiOperationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationListResult from a JSON string
api_operation_list_result_instance = ApiOperationListResult.from_json(json)
# print the JSON string representation of the object
print(ApiOperationListResult.to_json())

# convert the object into a dict
api_operation_list_result_dict = api_operation_list_result_instance.to_dict()
# create an instance of ApiOperationListResult from a dict
api_operation_list_result_from_dict = ApiOperationListResult.from_dict(api_operation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


