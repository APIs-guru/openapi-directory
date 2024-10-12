# ApiError

Api error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**details** | [**List[ApiErrorBase]**](ApiErrorBase.md) | The Api error details | [optional] 
**innererror** | [**InnerError**](InnerError.md) |  | [optional] 
**message** | **str** | The error message. | [optional] 
**target** | **str** | The target of the particular error. | [optional] 

## Example

```python
from openapi_client.models.api_error import ApiError

# TODO update the JSON string below
json = "{}"
# create an instance of ApiError from a JSON string
api_error_instance = ApiError.from_json(json)
# print the JSON string representation of the object
print(ApiError.to_json())

# convert the object into a dict
api_error_dict = api_error_instance.to_dict()
# create an instance of ApiError from a dict
api_error_from_dict = ApiError.from_dict(api_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


