# BareMetalCluster

Resource that represents a bare metal user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_cluster_membership** | **str** | Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster&#39;s fleet membership. | [optional] 
**admin_cluster_name** | **str** | Output only. The resource name of the bare metal admin cluster managing this user cluster. | [optional] [readonly] 
**annotations** | **Dict[str, str]** | Annotations on the bare metal user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] 
**bare_metal_version** | **str** | Required. The Anthos clusters on bare metal version for your user cluster. | [optional] 
**binary_authorization** | [**BinaryAuthorization**](BinaryAuthorization.md) |  | [optional] 
**cluster_operations** | [**BareMetalClusterOperationsConfig**](BareMetalClusterOperationsConfig.md) |  | [optional] 
**control_plane** | [**BareMetalControlPlaneConfig**](BareMetalControlPlaneConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time when the bare metal user cluster was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. The time when the bare metal user cluster was deleted. If the resource is not deleted, this must be empty | [optional] [readonly] 
**description** | **str** | A human readable description of this bare metal user cluster. | [optional] 
**endpoint** | **str** | Output only. The IP address of the bare metal user cluster&#39;s API server. | [optional] [readonly] 
**etag** | **str** | Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. | [optional] [readonly] 
**fleet** | [**Fleet**](Fleet.md) |  | [optional] 
**load_balancer** | [**BareMetalLoadBalancerConfig**](BareMetalLoadBalancerConfig.md) |  | [optional] 
**local_name** | **str** | Output only. The object name of the bare metal user cluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the name in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. When the local name and cluster name differ, the local name is used in the admin cluster controller logs. You use the cluster name when accessing the cluster using bmctl and kubectl. | [optional] [readonly] 
**maintenance_config** | [**BareMetalMaintenanceConfig**](BareMetalMaintenanceConfig.md) |  | [optional] 
**maintenance_status** | [**BareMetalMaintenanceStatus**](BareMetalMaintenanceStatus.md) |  | [optional] 
**name** | **str** | Immutable. The bare metal user cluster resource name. | [optional] 
**network_config** | [**BareMetalNetworkConfig**](BareMetalNetworkConfig.md) |  | [optional] 
**node_access_config** | [**BareMetalNodeAccessConfig**](BareMetalNodeAccessConfig.md) |  | [optional] 
**node_config** | [**BareMetalWorkloadNodeConfig**](BareMetalWorkloadNodeConfig.md) |  | [optional] 
**os_environment_config** | [**BareMetalOsEnvironmentConfig**](BareMetalOsEnvironmentConfig.md) |  | [optional] 
**proxy** | [**BareMetalProxyConfig**](BareMetalProxyConfig.md) |  | [optional] 
**reconciling** | **bool** | Output only. If set, there are currently changes in flight to the bare metal user cluster. | [optional] [readonly] 
**security_config** | [**BareMetalSecurityConfig**](BareMetalSecurityConfig.md) |  | [optional] 
**state** | **str** | Output only. The current state of the bare metal user cluster. | [optional] [readonly] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**storage** | [**BareMetalStorageConfig**](BareMetalStorageConfig.md) |  | [optional] 
**uid** | **str** | Output only. The unique identifier of the bare metal user cluster. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the bare metal user cluster was last updated. | [optional] [readonly] 
**upgrade_policy** | [**BareMetalClusterUpgradePolicy**](BareMetalClusterUpgradePolicy.md) |  | [optional] 
**validation_check** | [**ValidationCheck**](ValidationCheck.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_cluster import BareMetalCluster

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalCluster from a JSON string
bare_metal_cluster_instance = BareMetalCluster.from_json(json)
# print the JSON string representation of the object
print(BareMetalCluster.to_json())

# convert the object into a dict
bare_metal_cluster_dict = bare_metal_cluster_instance.to_dict()
# create an instance of BareMetalCluster from a dict
bare_metal_cluster_from_dict = BareMetalCluster.from_dict(bare_metal_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


