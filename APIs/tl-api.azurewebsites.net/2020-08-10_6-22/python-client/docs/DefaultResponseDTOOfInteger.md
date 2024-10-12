# DefaultResponseDTOOfInteger

The DefaultResponseDTO Class. Contains fields of DefaultResponse DTO in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_error** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**response_exception** | **object** |  | [optional] 
**result** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.default_response_dtoof_integer import DefaultResponseDTOOfInteger

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResponseDTOOfInteger from a JSON string
default_response_dtoof_integer_instance = DefaultResponseDTOOfInteger.from_json(json)
# print the JSON string representation of the object
print(DefaultResponseDTOOfInteger.to_json())

# convert the object into a dict
default_response_dtoof_integer_dict = default_response_dtoof_integer_instance.to_dict()
# create an instance of DefaultResponseDTOOfInteger from a dict
default_response_dtoof_integer_from_dict = DefaultResponseDTOOfInteger.from_dict(default_response_dtoof_integer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


