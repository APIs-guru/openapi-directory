# Error

Generic resource error information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | the HTTP status code or error code associated with this error | [optional] [readonly] 
**details** | [**List[ErrorDetails]**](ErrorDetails.md) | the list of error details | [optional] [readonly] 
**inner_error** | [**InnerError**](InnerError.md) |  | [optional] 
**message** | **str** | the error message to display. | [optional] [readonly] 
**target** | **str** | the target of the error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.error import Error

# TODO update the JSON string below
json = "{}"
# create an instance of Error from a JSON string
error_instance = Error.from_json(json)
# print the JSON string representation of the object
print(Error.to_json())

# convert the object into a dict
error_dict = error_instance.to_dict()
# create an instance of Error from a dict
error_from_dict = Error.from_dict(error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


