# InternalError

An object containing more specific information than the parent object about the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Detailed error code. | [optional] 
**innererror** | [**InternalError**](InternalError.md) |  | [optional] 

## Example

```python
from openapi_client.models.internal_error import InternalError

# TODO update the JSON string below
json = "{}"
# create an instance of InternalError from a JSON string
internal_error_instance = InternalError.from_json(json)
# print the JSON string representation of the object
print(InternalError.to_json())

# convert the object into a dict
internal_error_dict = internal_error_instance.to_dict()
# create an instance of InternalError from a dict
internal_error_from_dict = InternalError.from_dict(internal_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


