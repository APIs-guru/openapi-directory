# ServiceDiagnosticSettingsResource

Description of a service diagnostic setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceDiagnosticSettings**](ServiceDiagnosticSettings.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_diagnostic_settings_resource import ServiceDiagnosticSettingsResource

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDiagnosticSettingsResource from a JSON string
service_diagnostic_settings_resource_instance = ServiceDiagnosticSettingsResource.from_json(json)
# print the JSON string representation of the object
print(ServiceDiagnosticSettingsResource.to_json())

# convert the object into a dict
service_diagnostic_settings_resource_dict = service_diagnostic_settings_resource_instance.to_dict()
# create an instance of ServiceDiagnosticSettingsResource from a dict
service_diagnostic_settings_resource_from_dict = ServiceDiagnosticSettingsResource.from_dict(service_diagnostic_settings_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


