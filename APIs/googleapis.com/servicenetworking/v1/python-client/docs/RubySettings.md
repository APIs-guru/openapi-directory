# RubySettings

Settings for Ruby client libraries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**CommonLanguageSettings**](CommonLanguageSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.ruby_settings import RubySettings

# TODO update the JSON string below
json = "{}"
# create an instance of RubySettings from a JSON string
ruby_settings_instance = RubySettings.from_json(json)
# print the JSON string representation of the object
print(RubySettings.to_json())

# convert the object into a dict
ruby_settings_dict = ruby_settings_instance.to_dict()
# create an instance of RubySettings from a dict
ruby_settings_from_dict = RubySettings.from_dict(ruby_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


