# ApiOperationListResult

The list of managed API operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ApiOperation]**](ApiOperation.md) | The api operation definitions for an API. | [optional] 

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


