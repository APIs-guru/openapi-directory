# DefaultResponseDTOOfBoolean

The DefaultResponseDTO Class. Contains fields of DefaultResponse DTO in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_error** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**response_exception** | **object** |  | [optional] 
**result** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.default_response_dtoof_boolean import DefaultResponseDTOOfBoolean

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResponseDTOOfBoolean from a JSON string
default_response_dtoof_boolean_instance = DefaultResponseDTOOfBoolean.from_json(json)
# print the JSON string representation of the object
print(DefaultResponseDTOOfBoolean.to_json())

# convert the object into a dict
default_response_dtoof_boolean_dict = default_response_dtoof_boolean_instance.to_dict()
# create an instance of DefaultResponseDTOOfBoolean from a dict
default_response_dtoof_boolean_from_dict = DefaultResponseDTOOfBoolean.from_dict(default_response_dtoof_boolean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


