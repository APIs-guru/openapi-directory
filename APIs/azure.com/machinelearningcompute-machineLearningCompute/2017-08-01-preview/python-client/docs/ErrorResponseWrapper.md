# ErrorResponseWrapper

Wrapper for error response to follow ARM guidelines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.error_response_wrapper import ErrorResponseWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponseWrapper from a JSON string
error_response_wrapper_instance = ErrorResponseWrapper.from_json(json)
# print the JSON string representation of the object
print(ErrorResponseWrapper.to_json())

# convert the object into a dict
error_response_wrapper_dict = error_response_wrapper_instance.to_dict()
# create an instance of ErrorResponseWrapper from a dict
error_response_wrapper_from_dict = ErrorResponseWrapper.from_dict(error_response_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


