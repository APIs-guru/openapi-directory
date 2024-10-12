# BackendPoolProperties

The JSON object that contains the properties required to create a routing rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_state** | [**ResourceState**](ResourceState.md) |  | [optional] 
**backends** | [**List[Backend]**](Backend.md) | The set of backends for this pool | [optional] 
**health_probe_settings** | [**BackendPoolUpdateParametersHealthProbeSettings**](BackendPoolUpdateParametersHealthProbeSettings.md) |  | [optional] 
**load_balancing_settings** | [**BackendPoolUpdateParametersHealthProbeSettings**](BackendPoolUpdateParametersHealthProbeSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.backend_pool_properties import BackendPoolProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackendPoolProperties from a JSON string
backend_pool_properties_instance = BackendPoolProperties.from_json(json)
# print the JSON string representation of the object
print(BackendPoolProperties.to_json())

# convert the object into a dict
backend_pool_properties_dict = backend_pool_properties_instance.to_dict()
# create an instance of BackendPoolProperties from a dict
backend_pool_properties_from_dict = BackendPoolProperties.from_dict(backend_pool_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


