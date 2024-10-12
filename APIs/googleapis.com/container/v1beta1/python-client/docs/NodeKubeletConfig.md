# NodeKubeletConfig

Node kubelet configs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_cfs_quota** | **bool** | Enable CPU CFS quota enforcement for containers that specify CPU limits. This option is enabled by default which makes kubelet use CFS quota (https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all. Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits. The default value is &#39;true&#39; if unspecified. | [optional] 
**cpu_cfs_quota_period** | **str** | Set the CPU CFS quota period value &#39;cpu.cfs_period_us&#39;. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as \&quot;300ms\&quot;. Valid time units are \&quot;ns\&quot;, \&quot;us\&quot; (or \&quot;µs\&quot;), \&quot;ms\&quot;, \&quot;s\&quot;, \&quot;m\&quot;, \&quot;h\&quot;. The value must be a positive duration. | [optional] 
**cpu_manager_policy** | **str** | Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. * \&quot;none\&quot;: the default, which represents the existing scheduling behavior. * \&quot;static\&quot;: allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is &#39;none&#39; if unspecified. | [optional] 
**insecure_kubelet_readonly_port_enabled** | **bool** | Enable or disable Kubelet read only port. | [optional] 
**pod_pids_limit** | **str** | Set the Pod PID limits. See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304. | [optional] 

## Example

```python
from openapi_client.models.node_kubelet_config import NodeKubeletConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NodeKubeletConfig from a JSON string
node_kubelet_config_instance = NodeKubeletConfig.from_json(json)
# print the JSON string representation of the object
print(NodeKubeletConfig.to_json())

# convert the object into a dict
node_kubelet_config_dict = node_kubelet_config_instance.to_dict()
# create an instance of NodeKubeletConfig from a dict
node_kubelet_config_from_dict = NodeKubeletConfig.from_dict(node_kubelet_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


