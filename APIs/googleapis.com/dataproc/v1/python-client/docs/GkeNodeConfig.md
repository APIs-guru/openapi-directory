# GkeNodeConfig

Parameters that describe cluster nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerators** | [**List[GkeNodePoolAcceleratorConfig]**](GkeNodePoolAcceleratorConfig.md) | Optional. A list of hardware accelerators (https://cloud.google.com/compute/docs/gpus) to attach to each node. | [optional] 
**boot_disk_kms_key** | **str** | Optional. The Customer Managed Encryption Key (CMEK) (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each node in the node pool. Specify the key using the following format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key} | [optional] 
**local_ssd_count** | **int** | Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks allowable per zone (see Adding Local SSDs (https://cloud.google.com/compute/docs/disks/local-ssd)). | [optional] 
**machine_type** | **str** | Optional. The name of a Compute Engine machine type (https://cloud.google.com/compute/docs/machine-types). | [optional] 
**min_cpu_platform** | **str** | Optional. Minimum CPU platform (https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as \&quot;Intel Haswell\&quot;&#x60; or Intel Sandy Bridge\&quot;. | [optional] 
**preemptible** | **bool** | Optional. Whether the nodes are created as legacy preemptible VM instances (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). | [optional] 
**spot** | **bool** | Optional. Whether the nodes are created as Spot VM instances (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). | [optional] 

## Example

```python
from openapi_client.models.gke_node_config import GkeNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GkeNodeConfig from a JSON string
gke_node_config_instance = GkeNodeConfig.from_json(json)
# print the JSON string representation of the object
print(GkeNodeConfig.to_json())

# convert the object into a dict
gke_node_config_dict = gke_node_config_instance.to_dict()
# create an instance of GkeNodeConfig from a dict
gke_node_config_from_dict = GkeNodeConfig.from_dict(gke_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


