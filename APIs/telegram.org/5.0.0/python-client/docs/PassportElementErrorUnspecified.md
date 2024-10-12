# PassportElementErrorUnspecified

Represents an issue in an unspecified place. The error is considered resolved when new data is added.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**element_hash** | **str** | Base64-encoded element hash | 
**message** | **str** | Error message | 
**source** | **str** | Error source, must be *unspecified* | 
**type** | **str** | Type of element of the user&#39;s Telegram Passport which has the issue | 

## Example

```python
from openapi_client.models.passport_element_error_unspecified import PassportElementErrorUnspecified

# TODO update the JSON string below
json = "{}"
# create an instance of PassportElementErrorUnspecified from a JSON string
passport_element_error_unspecified_instance = PassportElementErrorUnspecified.from_json(json)
# print the JSON string representation of the object
print(PassportElementErrorUnspecified.to_json())

# convert the object into a dict
passport_element_error_unspecified_dict = passport_element_error_unspecified_instance.to_dict()
# create an instance of PassportElementErrorUnspecified from a dict
passport_element_error_unspecified_from_dict = PassportElementErrorUnspecified.from_dict(passport_element_error_unspecified_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


