# FlatErrorResponse

An API Error response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A corresponding code for this error | [optional] 
**id** | **str** | An unique error identifier generated for the request | [optional] 
**message** | **str** | A printable message for this message | [optional] 
**param** | **str** | The related parameter that caused the error | [optional] 

## Example

```python
from openapi_client.models.flat_error_response import FlatErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FlatErrorResponse from a JSON string
flat_error_response_instance = FlatErrorResponse.from_json(json)
# print the JSON string representation of the object
print(FlatErrorResponse.to_json())

# convert the object into a dict
flat_error_response_dict = flat_error_response_instance.to_dict()
# create an instance of FlatErrorResponse from a dict
flat_error_response_from_dict = FlatErrorResponse.from_dict(flat_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


