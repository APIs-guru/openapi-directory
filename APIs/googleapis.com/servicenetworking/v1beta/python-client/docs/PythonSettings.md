# PythonSettings

Settings for Python client libraries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**CommonLanguageSettings**](CommonLanguageSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.python_settings import PythonSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PythonSettings from a JSON string
python_settings_instance = PythonSettings.from_json(json)
# print the JSON string representation of the object
print(PythonSettings.to_json())

# convert the object into a dict
python_settings_dict = python_settings_instance.to_dict()
# create an instance of PythonSettings from a dict
python_settings_from_dict = PythonSettings.from_dict(python_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


