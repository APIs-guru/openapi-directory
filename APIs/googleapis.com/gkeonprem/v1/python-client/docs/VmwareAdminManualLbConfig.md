# VmwareAdminManualLbConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addons_node_port** | **int** | NodePort for add-ons server in the admin cluster. | [optional] 
**control_plane_node_port** | **int** | NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968). | [optional] 
**ingress_http_node_port** | **int** | NodePort for ingress service&#39;s http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527). | [optional] 
**ingress_https_node_port** | **int** | NodePort for ingress service&#39;s https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139). | [optional] 
**konnectivity_server_node_port** | **int** | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_manual_lb_config import VmwareAdminManualLbConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminManualLbConfig from a JSON string
vmware_admin_manual_lb_config_instance = VmwareAdminManualLbConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminManualLbConfig.to_json())

# convert the object into a dict
vmware_admin_manual_lb_config_dict = vmware_admin_manual_lb_config_instance.to_dict()
# create an instance of VmwareAdminManualLbConfig from a dict
vmware_admin_manual_lb_config_from_dict = VmwareAdminManualLbConfig.from_dict(vmware_admin_manual_lb_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


