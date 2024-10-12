# UpdateNodePoolRequest

SetNodePoolVersionRequest updates the version of a node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**confidential_nodes** | [**ConfidentialNodes**](ConfidentialNodes.md) |  | [optional] 
**disk_size_gb** | **str** | Optional. The desired disk size for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk size. | [optional] 
**disk_type** | **str** | Optional. The desired disk type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk type. | [optional] 
**etag** | **str** | The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned. | [optional] 
**fast_socket** | [**FastSocket**](FastSocket.md) |  | [optional] 
**gcfs_config** | [**GcfsConfig**](GcfsConfig.md) |  | [optional] 
**gvnic** | [**VirtualNIC**](VirtualNIC.md) |  | [optional] 
**image_type** | **str** | Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. | [optional] 
**kubelet_config** | [**NodeKubeletConfig**](NodeKubeletConfig.md) |  | [optional] 
**labels** | [**NodeLabels**](NodeLabels.md) |  | [optional] 
**linux_node_config** | [**LinuxNodeConfig**](LinuxNodeConfig.md) |  | [optional] 
**locations** | **List[str]** | The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool&#39;s nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed. | [optional] 
**logging_config** | [**NodePoolLoggingConfig**](NodePoolLoggingConfig.md) |  | [optional] 
**machine_type** | **str** | Optional. The desired machine type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified machine type. | [optional] 
**name** | **str** | The name (project, location, cluster, node pool) of the node pool to update. Specified in the format &#x60;projects/*/locations/*/clusters/*/nodePools/*&#x60;. | [optional] 
**node_network_config** | [**NodeNetworkConfig**](NodeNetworkConfig.md) |  | [optional] 
**node_pool_id** | **str** | Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. | [optional] 
**node_version** | **str** | Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - \&quot;latest\&quot;: picks the highest valid Kubernetes version - \&quot;1.X\&quot;: picks the highest valid patch+gke.N patch in the 1.X version - \&quot;1.X.Y\&quot;: picks the highest valid gke.N patch in the 1.X.Y version - \&quot;1.X.Y-gke.N\&quot;: picks an explicit Kubernetes version - \&quot;-\&quot;: picks the Kubernetes master version | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**queued_provisioning** | [**QueuedProvisioning**](QueuedProvisioning.md) |  | [optional] 
**resource_labels** | [**ResourceLabels**](ResourceLabels.md) |  | [optional] 
**resource_manager_tags** | [**ResourceManagerTags**](ResourceManagerTags.md) |  | [optional] 
**tags** | [**NetworkTags**](NetworkTags.md) |  | [optional] 
**taints** | [**NodeTaints**](NodeTaints.md) |  | [optional] 
**upgrade_settings** | [**UpgradeSettings**](UpgradeSettings.md) |  | [optional] 
**windows_node_config** | [**WindowsNodeConfig**](WindowsNodeConfig.md) |  | [optional] 
**workload_metadata_config** | [**WorkloadMetadataConfig**](WorkloadMetadataConfig.md) |  | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.update_node_pool_request import UpdateNodePoolRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNodePoolRequest from a JSON string
update_node_pool_request_instance = UpdateNodePoolRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNodePoolRequest.to_json())

# convert the object into a dict
update_node_pool_request_dict = update_node_pool_request_instance.to_dict()
# create an instance of UpdateNodePoolRequest from a dict
update_node_pool_request_from_dict = UpdateNodePoolRequest.from_dict(update_node_pool_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


