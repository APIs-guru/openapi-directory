# CallFunctionResponse

Response of `CallFunction` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Either system or user-function generated error. Set if execution was not successful. | [optional] 
**execution_id** | **str** | Execution id of function invocation. | [optional] 
**result** | **str** | Result populated for successful execution of synchronous function. Will not be populated if function does not return a result through context. | [optional] 

## Example

```python
from openapi_client.models.call_function_response import CallFunctionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CallFunctionResponse from a JSON string
call_function_response_instance = CallFunctionResponse.from_json(json)
# print the JSON string representation of the object
print(CallFunctionResponse.to_json())

# convert the object into a dict
call_function_response_dict = call_function_response_instance.to_dict()
# create an instance of CallFunctionResponse from a dict
call_function_response_from_dict = CallFunctionResponse.from_dict(call_function_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


