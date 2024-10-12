# DiagnosticSettingsCategoryResource

The diagnostic settings category resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiagnosticSettingsCategory**](DiagnosticSettingsCategory.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostic_settings_category_resource import DiagnosticSettingsCategoryResource

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticSettingsCategoryResource from a JSON string
diagnostic_settings_category_resource_instance = DiagnosticSettingsCategoryResource.from_json(json)
# print the JSON string representation of the object
print(DiagnosticSettingsCategoryResource.to_json())

# convert the object into a dict
diagnostic_settings_category_resource_dict = diagnostic_settings_category_resource_instance.to_dict()
# create an instance of DiagnosticSettingsCategoryResource from a dict
diagnostic_settings_category_resource_from_dict = DiagnosticSettingsCategoryResource.from_dict(diagnostic_settings_category_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


