# DefaultResponseDTOOfString

The DefaultResponseDTO Class. Contains fields of DefaultResponse DTO in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_error** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**response_exception** | **object** |  | [optional] 
**result** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.default_response_dtoof_string import DefaultResponseDTOOfString

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResponseDTOOfString from a JSON string
default_response_dtoof_string_instance = DefaultResponseDTOOfString.from_json(json)
# print the JSON string representation of the object
print(DefaultResponseDTOOfString.to_json())

# convert the object into a dict
default_response_dtoof_string_dict = default_response_dtoof_string_instance.to_dict()
# create an instance of DefaultResponseDTOOfString from a dict
default_response_dtoof_string_from_dict = DefaultResponseDTOOfString.from_dict(default_response_dtoof_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


