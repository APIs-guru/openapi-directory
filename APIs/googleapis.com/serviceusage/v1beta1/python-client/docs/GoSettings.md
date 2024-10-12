# GoSettings

Settings for Go client libraries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**CommonLanguageSettings**](CommonLanguageSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.go_settings import GoSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoSettings from a JSON string
go_settings_instance = GoSettings.from_json(json)
# print the JSON string representation of the object
print(GoSettings.to_json())

# convert the object into a dict
go_settings_dict = go_settings_instance.to_dict()
# create an instance of GoSettings from a dict
go_settings_from_dict = GoSettings.from_dict(go_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


