# AcceleratorConfig

AcceleratorConfig represents a Hardware Accelerator request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_count** | **str** | The number of the accelerator cards exposed to an instance. | [optional] 
**accelerator_type** | **str** | The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus) | [optional] 
**gpu_driver_installation_config** | [**GPUDriverInstallationConfig**](GPUDriverInstallationConfig.md) |  | [optional] 
**gpu_partition_size** | **str** | Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). | [optional] 
**gpu_sharing_config** | [**GPUSharingConfig**](GPUSharingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.accelerator_config import AcceleratorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AcceleratorConfig from a JSON string
accelerator_config_instance = AcceleratorConfig.from_json(json)
# print the JSON string representation of the object
print(AcceleratorConfig.to_json())

# convert the object into a dict
accelerator_config_dict = accelerator_config_instance.to_dict()
# create an instance of AcceleratorConfig from a dict
accelerator_config_from_dict = AcceleratorConfig.from_dict(accelerator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


