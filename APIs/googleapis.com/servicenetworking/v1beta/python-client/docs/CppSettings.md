# CppSettings

Settings for C++ client libraries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**CommonLanguageSettings**](CommonLanguageSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.cpp_settings import CppSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CppSettings from a JSON string
cpp_settings_instance = CppSettings.from_json(json)
# print the JSON string representation of the object
print(CppSettings.to_json())

# convert the object into a dict
cpp_settings_dict = cpp_settings_instance.to_dict()
# create an instance of CppSettings from a dict
cpp_settings_from_dict = CppSettings.from_dict(cpp_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


