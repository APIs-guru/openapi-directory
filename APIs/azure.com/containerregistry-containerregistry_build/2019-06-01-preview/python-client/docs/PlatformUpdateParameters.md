# PlatformUpdateParameters

The properties for updating the platform configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The OS architecture. | [optional] 
**os** | **str** | The operating system type required for the run. | [optional] 
**variant** | **str** | Variant of the CPU. | [optional] 

## Example

```python
from openapi_client.models.platform_update_parameters import PlatformUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformUpdateParameters from a JSON string
platform_update_parameters_instance = PlatformUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(PlatformUpdateParameters.to_json())

# convert the object into a dict
platform_update_parameters_dict = platform_update_parameters_instance.to_dict()
# create an instance of PlatformUpdateParameters from a dict
platform_update_parameters_from_dict = PlatformUpdateParameters.from_dict(platform_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


