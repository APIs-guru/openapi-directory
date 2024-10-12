# VmwareCluster

Resource that represents a VMware user cluster. ##

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_cluster_membership** | **str** | Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster&#39;s fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. | [optional] 
**admin_cluster_name** | **str** | Output only. The resource name of the VMware admin cluster hosting this user cluster. | [optional] [readonly] 
**annotations** | **Dict[str, str]** | Annotations on the VMware user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] 
**anti_affinity_groups** | [**VmwareAAGConfig**](VmwareAAGConfig.md) |  | [optional] 
**authorization** | [**Authorization**](Authorization.md) |  | [optional] 
**auto_repair_config** | [**VmwareAutoRepairConfig**](VmwareAutoRepairConfig.md) |  | [optional] 
**binary_authorization** | [**BinaryAuthorization**](BinaryAuthorization.md) |  | [optional] 
**control_plane_node** | [**VmwareControlPlaneNodeConfig**](VmwareControlPlaneNodeConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which VMware user cluster was created. | [optional] [readonly] 
**dataplane_v2** | [**VmwareDataplaneV2Config**](VmwareDataplaneV2Config.md) |  | [optional] 
**delete_time** | **str** | Output only. The time at which VMware user cluster was deleted. | [optional] [readonly] 
**description** | **str** | A human readable description of this VMware user cluster. | [optional] 
**disable_bundled_ingress** | **bool** | Disable bundled ingress. | [optional] 
**enable_control_plane_v2** | **bool** | Enable control plane V2. Default to false. | [optional] 
**endpoint** | **str** | Output only. The DNS name of VMware user cluster&#39;s API server. | [optional] [readonly] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. | [optional] 
**fleet** | [**Fleet**](Fleet.md) |  | [optional] 
**load_balancer** | [**VmwareLoadBalancerConfig**](VmwareLoadBalancerConfig.md) |  | [optional] 
**local_name** | **str** | Output only. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. | [optional] [readonly] 
**name** | **str** | Immutable. The VMware user cluster resource name. | [optional] 
**network_config** | [**VmwareNetworkConfig**](VmwareNetworkConfig.md) |  | [optional] 
**on_prem_version** | **str** | Required. The Anthos clusters on the VMware version for your user cluster. | [optional] 
**reconciling** | **bool** | Output only. If set, there are currently changes in flight to the VMware user cluster. | [optional] [readonly] 
**state** | **str** | Output only. The current state of VMware user cluster. | [optional] [readonly] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**storage** | [**VmwareStorageConfig**](VmwareStorageConfig.md) |  | [optional] 
**uid** | **str** | Output only. The unique identifier of the VMware user cluster. | [optional] [readonly] 
**update_time** | **str** | Output only. The time at which VMware user cluster was last updated. | [optional] [readonly] 
**upgrade_policy** | [**VmwareClusterUpgradePolicy**](VmwareClusterUpgradePolicy.md) |  | [optional] 
**validation_check** | [**ValidationCheck**](ValidationCheck.md) |  | [optional] 
**vcenter** | [**VmwareVCenterConfig**](VmwareVCenterConfig.md) |  | [optional] 
**vm_tracking_enabled** | **bool** | Enable VM tracking. | [optional] 

## Example

```python
from openapi_client.models.vmware_cluster import VmwareCluster

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareCluster from a JSON string
vmware_cluster_instance = VmwareCluster.from_json(json)
# print the JSON string representation of the object
print(VmwareCluster.to_json())

# convert the object into a dict
vmware_cluster_dict = vmware_cluster_instance.to_dict()
# create an instance of VmwareCluster from a dict
vmware_cluster_from_dict = VmwareCluster.from_dict(vmware_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


