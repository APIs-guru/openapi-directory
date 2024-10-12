# CustomModuleValidationErrors

A list of zero or more errors encountered while validating the uploaded configuration of an Event Threat Detection Custom Module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[CustomModuleValidationError]**](CustomModuleValidationError.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_module_validation_errors import CustomModuleValidationErrors

# TODO update the JSON string below
json = "{}"
# create an instance of CustomModuleValidationErrors from a JSON string
custom_module_validation_errors_instance = CustomModuleValidationErrors.from_json(json)
# print the JSON string representation of the object
print(CustomModuleValidationErrors.to_json())

# convert the object into a dict
custom_module_validation_errors_dict = custom_module_validation_errors_instance.to_dict()
# create an instance of CustomModuleValidationErrors from a dict
custom_module_validation_errors_from_dict = CustomModuleValidationErrors.from_dict(custom_module_validation_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


