# BackendPoolUpdateParameters

A collection of backends that can be routed to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | [**List[Backend]**](Backend.md) | The set of backends for this pool | [optional] 
**health_probe_settings** | [**BackendPoolUpdateParametersHealthProbeSettings**](BackendPoolUpdateParametersHealthProbeSettings.md) |  | [optional] 
**load_balancing_settings** | [**BackendPoolUpdateParametersHealthProbeSettings**](BackendPoolUpdateParametersHealthProbeSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.backend_pool_update_parameters import BackendPoolUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BackendPoolUpdateParameters from a JSON string
backend_pool_update_parameters_instance = BackendPoolUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(BackendPoolUpdateParameters.to_json())

# convert the object into a dict
backend_pool_update_parameters_dict = backend_pool_update_parameters_instance.to_dict()
# create an instance of BackendPoolUpdateParameters from a dict
backend_pool_update_parameters_from_dict = BackendPoolUpdateParameters.from_dict(backend_pool_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


