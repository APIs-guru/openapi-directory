# DiagnosticSettingsResource

The diagnostic setting resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiagnosticSettings**](DiagnosticSettings.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostic_settings_resource import DiagnosticSettingsResource

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticSettingsResource from a JSON string
diagnostic_settings_resource_instance = DiagnosticSettingsResource.from_json(json)
# print the JSON string representation of the object
print(DiagnosticSettingsResource.to_json())

# convert the object into a dict
diagnostic_settings_resource_dict = diagnostic_settings_resource_instance.to_dict()
# create an instance of DiagnosticSettingsResource from a dict
diagnostic_settings_resource_from_dict = DiagnosticSettingsResource.from_dict(diagnostic_settings_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


