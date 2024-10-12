# VmwareAdminCluster

Resource that represents a VMware admin cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addon_node** | [**VmwareAdminAddonNodeConfig**](VmwareAdminAddonNodeConfig.md) |  | [optional] 
**annotations** | **Dict[str, str]** | Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] 
**anti_affinity_groups** | [**VmwareAAGConfig**](VmwareAAGConfig.md) |  | [optional] 
**authorization** | [**VmwareAdminAuthorizationConfig**](VmwareAdminAuthorizationConfig.md) |  | [optional] 
**auto_repair_config** | [**VmwareAutoRepairConfig**](VmwareAutoRepairConfig.md) |  | [optional] 
**bootstrap_cluster_membership** | **str** | The bootstrap cluster this VMware admin cluster belongs to. | [optional] 
**control_plane_node** | [**VmwareAdminControlPlaneNodeConfig**](VmwareAdminControlPlaneNodeConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which VMware admin cluster was created. | [optional] [readonly] 
**description** | **str** | A human readable description of this VMware admin cluster. | [optional] 
**endpoint** | **str** | Output only. The DNS name of VMware admin cluster&#39;s API server. | [optional] [readonly] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. | [optional] 
**fleet** | [**Fleet**](Fleet.md) |  | [optional] 
**image_type** | **str** | The OS image type for the VMware admin cluster. | [optional] 
**load_balancer** | [**VmwareAdminLoadBalancerConfig**](VmwareAdminLoadBalancerConfig.md) |  | [optional] 
**local_name** | **str** | Output only. The object name of the VMware OnPremAdminCluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. | [optional] [readonly] 
**name** | **str** | Immutable. The VMware admin cluster resource name. | [optional] 
**network_config** | [**VmwareAdminNetworkConfig**](VmwareAdminNetworkConfig.md) |  | [optional] 
**on_prem_version** | **str** | The Anthos clusters on the VMware version for the admin cluster. | [optional] 
**platform_config** | [**VmwarePlatformConfig**](VmwarePlatformConfig.md) |  | [optional] 
**prepared_secrets** | [**VmwareAdminPreparedSecretsConfig**](VmwareAdminPreparedSecretsConfig.md) |  | [optional] 
**reconciling** | **bool** | Output only. If set, there are currently changes in flight to the VMware admin cluster. | [optional] [readonly] 
**state** | **str** | Output only. The current state of VMware admin cluster. | [optional] [readonly] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**uid** | **str** | Output only. The unique identifier of the VMware admin cluster. | [optional] [readonly] 
**update_time** | **str** | Output only. The time at which VMware admin cluster was last updated. | [optional] [readonly] 
**vcenter** | [**VmwareAdminVCenterConfig**](VmwareAdminVCenterConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_cluster import VmwareAdminCluster

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminCluster from a JSON string
vmware_admin_cluster_instance = VmwareAdminCluster.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminCluster.to_json())

# convert the object into a dict
vmware_admin_cluster_dict = vmware_admin_cluster_instance.to_dict()
# create an instance of VmwareAdminCluster from a dict
vmware_admin_cluster_from_dict = VmwareAdminCluster.from_dict(vmware_admin_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


