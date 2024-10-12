# Error

The error object. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**ErrorCode**](ErrorCode.md) |  | 
**details** | [**List[Error]**](Error.md) | An array of details about specific errors that led to this reported error. | [optional] 
**inner_error** | [**InnerErrorModel**](InnerErrorModel.md) |  | [optional] 
**message** | **str** | A human-readable representation of the error. | [optional] 
**target** | **str** | The target of the error. | [optional] 

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


