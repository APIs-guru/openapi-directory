# ExceptionResponse

The api error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ServiceError**](ServiceError.md) |  | [optional] 

## Example

```python
from openapi_client.models.exception_response import ExceptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExceptionResponse from a JSON string
exception_response_instance = ExceptionResponse.from_json(json)
# print the JSON string representation of the object
print(ExceptionResponse.to_json())

# convert the object into a dict
exception_response_dict = exception_response_instance.to_dict()
# create an instance of ExceptionResponse from a dict
exception_response_from_dict = ExceptionResponse.from_dict(exception_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


