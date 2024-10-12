# ServiceDiagnosticSettingsResourcePatch

Service diagnostic setting resource for patch operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceDiagnosticSettings**](ServiceDiagnosticSettings.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.service_diagnostic_settings_resource_patch import ServiceDiagnosticSettingsResourcePatch

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDiagnosticSettingsResourcePatch from a JSON string
service_diagnostic_settings_resource_patch_instance = ServiceDiagnosticSettingsResourcePatch.from_json(json)
# print the JSON string representation of the object
print(ServiceDiagnosticSettingsResourcePatch.to_json())

# convert the object into a dict
service_diagnostic_settings_resource_patch_dict = service_diagnostic_settings_resource_patch_instance.to_dict()
# create an instance of ServiceDiagnosticSettingsResourcePatch from a dict
service_diagnostic_settings_resource_patch_from_dict = ServiceDiagnosticSettingsResourcePatch.from_dict(service_diagnostic_settings_resource_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


