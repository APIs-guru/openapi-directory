# BackendPoolUpdateParametersHealthProbeSettings

Reference to another subresource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.backend_pool_update_parameters_health_probe_settings import BackendPoolUpdateParametersHealthProbeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BackendPoolUpdateParametersHealthProbeSettings from a JSON string
backend_pool_update_parameters_health_probe_settings_instance = BackendPoolUpdateParametersHealthProbeSettings.from_json(json)
# print the JSON string representation of the object
print(BackendPoolUpdateParametersHealthProbeSettings.to_json())

# convert the object into a dict
backend_pool_update_parameters_health_probe_settings_dict = backend_pool_update_parameters_health_probe_settings_instance.to_dict()
# create an instance of BackendPoolUpdateParametersHealthProbeSettings from a dict
backend_pool_update_parameters_health_probe_settings_from_dict = BackendPoolUpdateParametersHealthProbeSettings.from_dict(backend_pool_update_parameters_health_probe_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


