# HealthProbeSettingsUpdateParameters

L7 health probe settings for a backend pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_state** | **str** | Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool. | [optional] 
**health_probe_method** | **str** | Configures which HTTP method to use to probe the backends defined under backendPools. | [optional] [default to 'HEAD']
**interval_in_seconds** | **int** | The number of seconds between health probes. | [optional] 
**path** | **str** | The path to use for the health probe. Default is / | [optional] 
**protocol** | **str** | Protocol scheme to use for this probe | [optional] 

## Example

```python
from openapi_client.models.health_probe_settings_update_parameters import HealthProbeSettingsUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProbeSettingsUpdateParameters from a JSON string
health_probe_settings_update_parameters_instance = HealthProbeSettingsUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(HealthProbeSettingsUpdateParameters.to_json())

# convert the object into a dict
health_probe_settings_update_parameters_dict = health_probe_settings_update_parameters_instance.to_dict()
# create an instance of HealthProbeSettingsUpdateParameters from a dict
health_probe_settings_update_parameters_from_dict = HealthProbeSettingsUpdateParameters.from_dict(health_probe_settings_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


