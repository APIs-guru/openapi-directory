# CallFunctionRequest

Request for the `CallFunction` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Required. Input to be passed to the function. | [optional] 

## Example

```python
from openapi_client.models.call_function_request import CallFunctionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CallFunctionRequest from a JSON string
call_function_request_instance = CallFunctionRequest.from_json(json)
# print the JSON string representation of the object
print(CallFunctionRequest.to_json())

# convert the object into a dict
call_function_request_dict = call_function_request_instance.to_dict()
# create an instance of CallFunctionRequest from a dict
call_function_request_from_dict = CallFunctionRequest.from_dict(call_function_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


