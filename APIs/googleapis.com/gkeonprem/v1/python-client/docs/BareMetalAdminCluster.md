# BareMetalAdminCluster

Resource that represents a bare metal admin cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Annotations on the bare metal admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] 
**bare_metal_version** | **str** | The Anthos clusters on bare metal version for the bare metal admin cluster. | [optional] 
**binary_authorization** | [**BinaryAuthorization**](BinaryAuthorization.md) |  | [optional] 
**cluster_operations** | [**BareMetalAdminClusterOperationsConfig**](BareMetalAdminClusterOperationsConfig.md) |  | [optional] 
**control_plane** | [**BareMetalAdminControlPlaneConfig**](BareMetalAdminControlPlaneConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which this bare metal admin cluster was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. The time at which this bare metal admin cluster was deleted. If the resource is not deleted, this must be empty | [optional] [readonly] 
**description** | **str** | A human readable description of this bare metal admin cluster. | [optional] 
**endpoint** | **str** | Output only. The IP address name of bare metal admin cluster&#39;s API server. | [optional] [readonly] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. | [optional] 
**fleet** | [**Fleet**](Fleet.md) |  | [optional] 
**load_balancer** | [**BareMetalAdminLoadBalancerConfig**](BareMetalAdminLoadBalancerConfig.md) |  | [optional] 
**local_name** | **str** | Output only. The object name of the bare metal cluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. | [optional] [readonly] 
**maintenance_config** | [**BareMetalAdminMaintenanceConfig**](BareMetalAdminMaintenanceConfig.md) |  | [optional] 
**maintenance_status** | [**BareMetalAdminMaintenanceStatus**](BareMetalAdminMaintenanceStatus.md) |  | [optional] 
**name** | **str** | Immutable. The bare metal admin cluster resource name. | [optional] 
**network_config** | [**BareMetalAdminNetworkConfig**](BareMetalAdminNetworkConfig.md) |  | [optional] 
**node_access_config** | [**BareMetalAdminNodeAccessConfig**](BareMetalAdminNodeAccessConfig.md) |  | [optional] 
**node_config** | [**BareMetalAdminWorkloadNodeConfig**](BareMetalAdminWorkloadNodeConfig.md) |  | [optional] 
**os_environment_config** | [**BareMetalAdminOsEnvironmentConfig**](BareMetalAdminOsEnvironmentConfig.md) |  | [optional] 
**proxy** | [**BareMetalAdminProxyConfig**](BareMetalAdminProxyConfig.md) |  | [optional] 
**reconciling** | **bool** | Output only. If set, there are currently changes in flight to the bare metal Admin Cluster. | [optional] [readonly] 
**security_config** | [**BareMetalAdminSecurityConfig**](BareMetalAdminSecurityConfig.md) |  | [optional] 
**state** | **str** | Output only. The current state of the bare metal admin cluster. | [optional] [readonly] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**storage** | [**BareMetalAdminStorageConfig**](BareMetalAdminStorageConfig.md) |  | [optional] 
**uid** | **str** | Output only. The unique identifier of the bare metal admin cluster. | [optional] [readonly] 
**update_time** | **str** | Output only. The time at which this bare metal admin cluster was last updated. | [optional] [readonly] 
**validation_check** | [**ValidationCheck**](ValidationCheck.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_cluster import BareMetalAdminCluster

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminCluster from a JSON string
bare_metal_admin_cluster_instance = BareMetalAdminCluster.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminCluster.to_json())

# convert the object into a dict
bare_metal_admin_cluster_dict = bare_metal_admin_cluster_instance.to_dict()
# create an instance of BareMetalAdminCluster from a dict
bare_metal_admin_cluster_from_dict = BareMetalAdminCluster.from_dict(bare_metal_admin_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


