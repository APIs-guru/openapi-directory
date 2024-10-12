# ErrorResponseBody

Describes a particular API error with an error code and a message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An error code that describes the error condition more precisely than an HTTP status code.   Can be used to programmatically handle specific error cases. | 
**details** | [**List[ErrorResponseBody]**](ErrorResponseBody.md) | Contains nested errors that are related to this error. | [optional] 
**message** | **str** | A message that describes the error in detail and provides debugging information. | 
**target** | **str** | The target of the particular error (for example, the name of the property in error). | [optional] 

## Example

```python
from openapi_client.models.error_response_body import ErrorResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponseBody from a JSON string
error_response_body_instance = ErrorResponseBody.from_json(json)
# print the JSON string representation of the object
print(ErrorResponseBody.to_json())

# convert the object into a dict
error_response_body_dict = error_response_body_instance.to_dict()
# create an instance of ErrorResponseBody from a dict
error_response_body_from_dict = ErrorResponseBody.from_dict(error_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


