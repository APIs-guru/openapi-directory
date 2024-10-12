# GPUSharingConfig

GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gpu_sharing_strategy** | **str** | The type of GPU sharing strategy to enable on the GPU node. | [optional] 
**max_shared_clients_per_gpu** | **str** | The max number of containers that can share a physical GPU. | [optional] 

## Example

```python
from openapi_client.models.gpu_sharing_config import GPUSharingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GPUSharingConfig from a JSON string
gpu_sharing_config_instance = GPUSharingConfig.from_json(json)
# print the JSON string representation of the object
print(GPUSharingConfig.to_json())

# convert the object into a dict
gpu_sharing_config_dict = gpu_sharing_config_instance.to_dict()
# create an instance of GPUSharingConfig from a dict
gpu_sharing_config_from_dict = GPUSharingConfig.from_dict(gpu_sharing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


