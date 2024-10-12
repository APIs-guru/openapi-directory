# GkeNodePoolAcceleratorConfig

A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_count** | **str** | The number of accelerator cards exposed to an instance. | [optional] 
**accelerator_type** | **str** | The accelerator type resource namename (see GPUs on Compute Engine). | [optional] 
**gpu_partition_size** | **str** | Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). | [optional] 

## Example

```python
from openapi_client.models.gke_node_pool_accelerator_config import GkeNodePoolAcceleratorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GkeNodePoolAcceleratorConfig from a JSON string
gke_node_pool_accelerator_config_instance = GkeNodePoolAcceleratorConfig.from_json(json)
# print the JSON string representation of the object
print(GkeNodePoolAcceleratorConfig.to_json())

# convert the object into a dict
gke_node_pool_accelerator_config_dict = gke_node_pool_accelerator_config_instance.to_dict()
# create an instance of GkeNodePoolAcceleratorConfig from a dict
gke_node_pool_accelerator_config_from_dict = GkeNodePoolAcceleratorConfig.from_dict(gke_node_pool_accelerator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


