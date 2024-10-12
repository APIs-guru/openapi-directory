# CustomModuleValidationError

An error encountered while validating the uploaded configuration of an Event Threat Detection Custom Module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the error, suitable for human consumption. Required. | [optional] 
**end** | [**Position**](Position.md) |  | [optional] 
**field_path** | **str** | The path, in RFC 8901 JSON Pointer format, to the field that failed validation. This may be left empty if no specific field is affected. | [optional] 
**start** | [**Position**](Position.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_module_validation_error import CustomModuleValidationError

# TODO update the JSON string below
json = "{}"
# create an instance of CustomModuleValidationError from a JSON string
custom_module_validation_error_instance = CustomModuleValidationError.from_json(json)
# print the JSON string representation of the object
print(CustomModuleValidationError.to_json())

# convert the object into a dict
custom_module_validation_error_dict = custom_module_validation_error_instance.to_dict()
# create an instance of CustomModuleValidationError from a dict
custom_module_validation_error_from_dict = CustomModuleValidationError.from_dict(custom_module_validation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


