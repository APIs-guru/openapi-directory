# CapabilitiesCapabilities

The supported capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_cpu** | **float** | The maximum allowed CPU request in cores. | [optional] [readonly] 
**max_gpu_count** | **float** | The maximum allowed GPU count. | [optional] [readonly] 
**max_memory_in_gb** | **float** | The maximum allowed memory request in GB. | [optional] [readonly] 

## Example

```python
from openapi_client.models.capabilities_capabilities import CapabilitiesCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of CapabilitiesCapabilities from a JSON string
capabilities_capabilities_instance = CapabilitiesCapabilities.from_json(json)
# print the JSON string representation of the object
print(CapabilitiesCapabilities.to_json())

# convert the object into a dict
capabilities_capabilities_dict = capabilities_capabilities_instance.to_dict()
# create an instance of CapabilitiesCapabilities from a dict
capabilities_capabilities_from_dict = CapabilitiesCapabilities.from_dict(capabilities_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


