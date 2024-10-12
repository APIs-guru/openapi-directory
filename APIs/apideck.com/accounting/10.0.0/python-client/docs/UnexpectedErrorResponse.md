# UnexpectedErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | [**UnexpectedErrorResponseDetail**](UnexpectedErrorResponseDetail.md) |  | [optional] 
**error** | **str** | Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) | [optional] 
**message** | **str** | A human-readable message providing more details about the error. | [optional] 
**ref** | **str** | Link to documentation of error type | [optional] 
**status_code** | **float** | HTTP status code | [optional] 
**type_name** | **str** | The type of error returned | [optional] 

## Example

```python
from openapi_client.models.unexpected_error_response import UnexpectedErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UnexpectedErrorResponse from a JSON string
unexpected_error_response_instance = UnexpectedErrorResponse.from_json(json)
# print the JSON string representation of the object
print(UnexpectedErrorResponse.to_json())

# convert the object into a dict
unexpected_error_response_dict = unexpected_error_response_instance.to_dict()
# create an instance of UnexpectedErrorResponse from a dict
unexpected_error_response_from_dict = UnexpectedErrorResponse.from_dict(unexpected_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


