# DiagnosticSettingsCategory

The diagnostic settings Category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_type** | **str** | The type of the diagnostic settings category. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_settings_category import DiagnosticSettingsCategory

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticSettingsCategory from a JSON string
diagnostic_settings_category_instance = DiagnosticSettingsCategory.from_json(json)
# print the JSON string representation of the object
print(DiagnosticSettingsCategory.to_json())

# convert the object into a dict
diagnostic_settings_category_dict = diagnostic_settings_category_instance.to_dict()
# create an instance of DiagnosticSettingsCategory from a dict
diagnostic_settings_category_from_dict = DiagnosticSettingsCategory.from_dict(diagnostic_settings_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


