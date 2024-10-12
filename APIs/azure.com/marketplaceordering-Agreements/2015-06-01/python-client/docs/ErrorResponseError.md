# ErrorResponseError

The details of the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] [readonly] 
**message** | **str** | Error message indicating why the operation failed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.error_response_error import ErrorResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponseError from a JSON string
error_response_error_instance = ErrorResponseError.from_json(json)
# print the JSON string representation of the object
print(ErrorResponseError.to_json())

# convert the object into a dict
error_response_error_dict = error_response_error_instance.to_dict()
# create an instance of ErrorResponseError from a dict
error_response_error_from_dict = ErrorResponseError.from_dict(error_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


