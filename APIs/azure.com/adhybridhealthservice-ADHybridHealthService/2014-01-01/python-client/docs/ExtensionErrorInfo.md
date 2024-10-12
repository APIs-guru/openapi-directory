# ExtensionErrorInfo

The extension error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_stack** | **str** | The call stack for the error. | [optional] 
**extension_context** | **str** | The extension context. | [optional] 
**extension_name** | **str** | The extension name. | [optional] 

## Example

```python
from openapi_client.models.extension_error_info import ExtensionErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionErrorInfo from a JSON string
extension_error_info_instance = ExtensionErrorInfo.from_json(json)
# print the JSON string representation of the object
print(ExtensionErrorInfo.to_json())

# convert the object into a dict
extension_error_info_dict = extension_error_info_instance.to_dict()
# create an instance of ExtensionErrorInfo from a dict
extension_error_info_from_dict = ExtensionErrorInfo.from_dict(extension_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


