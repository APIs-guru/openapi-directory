# VmwareManualLbConfig

Represents configuration parameters for an already existing manual load balancer. Given the nature of manual load balancers it is expected that said load balancer will be fully managed by users. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update ManualLB configurations it can only bind a pre-existing configuration to a new VMware user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_node_port** | **int** | NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968). | [optional] 
**ingress_http_node_port** | **int** | NodePort for ingress service&#39;s http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527). | [optional] 
**ingress_https_node_port** | **int** | NodePort for ingress service&#39;s https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139). | [optional] 
**konnectivity_server_node_port** | **int** | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). | [optional] 

## Example

```python
from openapi_client.models.vmware_manual_lb_config import VmwareManualLbConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareManualLbConfig from a JSON string
vmware_manual_lb_config_instance = VmwareManualLbConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareManualLbConfig.to_json())

# convert the object into a dict
vmware_manual_lb_config_dict = vmware_manual_lb_config_instance.to_dict()
# create an instance of VmwareManualLbConfig from a dict
vmware_manual_lb_config_from_dict = VmwareManualLbConfig.from_dict(vmware_manual_lb_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


