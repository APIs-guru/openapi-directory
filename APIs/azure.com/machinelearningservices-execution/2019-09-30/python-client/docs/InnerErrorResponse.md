# InnerErrorResponse

A nested structure of errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**inner_error** | [**InnerErrorResponse**](InnerErrorResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.inner_error_response import InnerErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InnerErrorResponse from a JSON string
inner_error_response_instance = InnerErrorResponse.from_json(json)
# print the JSON string representation of the object
print(InnerErrorResponse.to_json())

# convert the object into a dict
inner_error_response_dict = inner_error_response_instance.to_dict()
# create an instance of InnerErrorResponse from a dict
inner_error_response_from_dict = InnerErrorResponse.from_dict(inner_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


