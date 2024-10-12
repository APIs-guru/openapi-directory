# ErrorResponseBody

Details of error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code, intended to be consumed programmatically. | [optional] 
**details** | [**List[ErrorResponseBody]**](ErrorResponseBody.md) | A list of additional details about the error. | [optional] 
**message** | **str** | Description of the error, intended for display in user interface. | [optional] 
**target** | **str** | Target of the particular error, for example name of the property. | [optional] 

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


