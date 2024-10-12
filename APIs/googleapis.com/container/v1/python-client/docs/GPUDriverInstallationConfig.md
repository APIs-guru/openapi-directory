# GPUDriverInstallationConfig

GPUDriverInstallationConfig specifies the version of GPU driver to be auto installed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gpu_driver_version** | **str** | Mode for how the GPU driver is installed. | [optional] 

## Example

```python
from openapi_client.models.gpu_driver_installation_config import GPUDriverInstallationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GPUDriverInstallationConfig from a JSON string
gpu_driver_installation_config_instance = GPUDriverInstallationConfig.from_json(json)
# print the JSON string representation of the object
print(GPUDriverInstallationConfig.to_json())

# convert the object into a dict
gpu_driver_installation_config_dict = gpu_driver_installation_config_instance.to_dict()
# create an instance of GPUDriverInstallationConfig from a dict
gpu_driver_installation_config_from_dict = GPUDriverInstallationConfig.from_dict(gpu_driver_installation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


