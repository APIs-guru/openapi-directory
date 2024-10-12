# HealthProbeSettingsProperties

The JSON object that contains the properties required to create a health probe settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_state** | [**ResourceState**](ResourceState.md) |  | [optional] 
**enabled_state** | **str** | Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool. | [optional] 
**health_probe_method** | **str** | Configures which HTTP method to use to probe the backends defined under backendPools. | [optional] [default to 'HEAD']
**interval_in_seconds** | **int** | The number of seconds between health probes. | [optional] 
**path** | **str** | The path to use for the health probe. Default is / | [optional] 
**protocol** | **str** | Protocol scheme to use for this probe | [optional] 

## Example

```python
from openapi_client.models.health_probe_settings_properties import HealthProbeSettingsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProbeSettingsProperties from a JSON string
health_probe_settings_properties_instance = HealthProbeSettingsProperties.from_json(json)
# print the JSON string representation of the object
print(HealthProbeSettingsProperties.to_json())

# convert the object into a dict
health_probe_settings_properties_dict = health_probe_settings_properties_instance.to_dict()
# create an instance of HealthProbeSettingsProperties from a dict
health_probe_settings_properties_from_dict = HealthProbeSettingsProperties.from_dict(health_probe_settings_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


