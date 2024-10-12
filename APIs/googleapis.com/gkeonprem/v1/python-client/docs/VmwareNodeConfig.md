# VmwareNodeConfig

Parameters that describe the configuration of all nodes within a given node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_disk_size_gb** | **str** | VMware disk size to be used during creation. | [optional] 
**cpus** | **str** | The number of CPUs for each node in the node pool. | [optional] 
**enable_load_balancer** | **bool** | Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. | [optional] 
**image** | **str** | The OS image name in vCenter, only valid when using Windows. | [optional] 
**image_type** | **str** | Required. The OS image to be used for each node in a node pool. Currently &#x60;cos&#x60;, &#x60;ubuntu&#x60;, &#x60;ubuntu_containerd&#x60; and &#x60;windows&#x60; are supported. | [optional] 
**labels** | **Dict[str, str]** | The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it&#39;s best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ | [optional] 
**memory_mb** | **str** | The megabytes of memory for each node in the node pool. | [optional] 
**replicas** | **str** | The number of nodes in the node pool. | [optional] 
**taints** | [**List[NodeTaint]**](NodeTaint.md) | The initial taints assigned to nodes of this node pool. | [optional] 
**vsphere_config** | [**VmwareVsphereConfig**](VmwareVsphereConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.vmware_node_config import VmwareNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareNodeConfig from a JSON string
vmware_node_config_instance = VmwareNodeConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareNodeConfig.to_json())

# convert the object into a dict
vmware_node_config_dict = vmware_node_config_instance.to_dict()
# create an instance of VmwareNodeConfig from a dict
vmware_node_config_from_dict = VmwareNodeConfig.from_dict(vmware_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


