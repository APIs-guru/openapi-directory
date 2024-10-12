# NodePool

NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling** | [**NodePoolAutoscaling**](NodePoolAutoscaling.md) |  | [optional] 
**best_effort_provisioning** | [**BestEffortProvisioning**](BestEffortProvisioning.md) |  | [optional] 
**conditions** | [**List[StatusCondition]**](StatusCondition.md) | Which conditions caused the current node pool state. | [optional] 
**config** | [**NodeConfig**](NodeConfig.md) |  | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**initial_node_count** | **int** | The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. | [optional] 
**instance_group_urls** | **List[str]** | [Output only] The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources. | [optional] 
**locations** | **List[str]** | The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool&#39;s nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed. | [optional] 
**management** | [**NodeManagement**](NodeManagement.md) |  | [optional] 
**max_pods_constraint** | [**MaxPodsConstraint**](MaxPodsConstraint.md) |  | [optional] 
**name** | **str** | The name of the node pool. | [optional] 
**network_config** | [**NodeNetworkConfig**](NodeNetworkConfig.md) |  | [optional] 
**placement_policy** | [**PlacementPolicy**](PlacementPolicy.md) |  | [optional] 
**pod_ipv4_cidr_size** | **int** | [Output only] The pod CIDR block size per node in this node pool. | [optional] 
**queued_provisioning** | [**QueuedProvisioning**](QueuedProvisioning.md) |  | [optional] 
**self_link** | **str** | [Output only] Server-defined URL for the resource. | [optional] 
**status** | **str** | [Output only] The status of the nodes in this pool instance. | [optional] 
**status_message** | **str** | [Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available. | [optional] 
**update_info** | [**UpdateInfo**](UpdateInfo.md) |  | [optional] 
**upgrade_settings** | [**UpgradeSettings**](UpgradeSettings.md) |  | [optional] 
**version** | **str** | The version of Kubernetes running on this NodePool&#39;s nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version). | [optional] 

## Example

```python
from openapi_client.models.node_pool import NodePool

# TODO update the JSON string below
json = "{}"
# create an instance of NodePool from a JSON string
node_pool_instance = NodePool.from_json(json)
# print the JSON string representation of the object
print(NodePool.to_json())

# convert the object into a dict
node_pool_dict = node_pool_instance.to_dict()
# create an instance of NodePool from a dict
node_pool_from_dict = NodePool.from_dict(node_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


