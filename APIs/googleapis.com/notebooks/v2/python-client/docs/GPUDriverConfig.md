# GPUDriverConfig

A GPU driver configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_gpu_driver_path** | **str** | Optional. Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we&#39;ll automatically choose from official GPU drivers. | [optional] 
**enable_gpu_driver** | **bool** | Optional. Whether the end user authorizes Google Cloud to install GPU driver on this VM instance. If this field is empty or set to false, the GPU driver won&#39;t be installed. Only applicable to instances with GPUs. | [optional] 

## Example

```python
from openapi_client.models.gpu_driver_config import GPUDriverConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GPUDriverConfig from a JSON string
gpu_driver_config_instance = GPUDriverConfig.from_json(json)
# print the JSON string representation of the object
print(GPUDriverConfig.to_json())

# convert the object into a dict
gpu_driver_config_dict = gpu_driver_config_instance.to_dict()
# create an instance of GPUDriverConfig from a dict
gpu_driver_config_from_dict = GPUDriverConfig.from_dict(gpu_driver_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


