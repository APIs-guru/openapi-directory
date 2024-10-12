# Cluster

A Google Kubernetes Engine cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addons_config** | [**AddonsConfig**](AddonsConfig.md) |  | [optional] 
**authenticator_groups_config** | [**AuthenticatorGroupsConfig**](AuthenticatorGroupsConfig.md) |  | [optional] 
**autopilot** | [**Autopilot**](Autopilot.md) |  | [optional] 
**autoscaling** | [**ClusterAutoscaling**](ClusterAutoscaling.md) |  | [optional] 
**binary_authorization** | [**BinaryAuthorization**](BinaryAuthorization.md) |  | [optional] 
**cluster_ipv4_cidr** | **str** | The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. &#x60;10.96.0.0/14&#x60;). Leave blank to have one automatically chosen or specify a &#x60;/14&#x60; block in &#x60;10.0.0.0/8&#x60;. | [optional] 
**cluster_telemetry** | [**ClusterTelemetry**](ClusterTelemetry.md) |  | [optional] 
**conditions** | [**List[StatusCondition]**](StatusCondition.md) | Which conditions caused the current cluster state. | [optional] 
**confidential_nodes** | [**ConfidentialNodes**](ConfidentialNodes.md) |  | [optional] 
**cost_management_config** | [**CostManagementConfig**](CostManagementConfig.md) |  | [optional] 
**create_time** | **str** | [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. | [optional] 
**current_master_version** | **str** | [Output only] The current software version of the master endpoint. | [optional] 
**current_node_count** | **int** | [Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information. | [optional] 
**current_node_version** | **str** | [Output only] Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they&#39;re in the process of being upgraded, this reflects the minimum version of all nodes. | [optional] 
**database_encryption** | [**DatabaseEncryption**](DatabaseEncryption.md) |  | [optional] 
**default_max_pods_constraint** | [**MaxPodsConstraint**](MaxPodsConstraint.md) |  | [optional] 
**description** | **str** | An optional description of this cluster. | [optional] 
**enable_k8s_beta_apis** | [**K8sBetaAPIConfig**](K8sBetaAPIConfig.md) |  | [optional] 
**enable_kubernetes_alpha** | **bool** | Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation. | [optional] 
**enable_tpu** | **bool** | Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead. | [optional] 
**endpoint** | **str** | [Output only] The IP address of this cluster&#39;s master endpoint. The endpoint can be accessed from the internet at &#x60;https://username:password@endpoint/&#x60;. See the &#x60;masterAuth&#x60; property of this resource for username and password information. | [optional] 
**enterprise_config** | [**EnterpriseConfig**](EnterpriseConfig.md) |  | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**expire_time** | **str** | [Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. | [optional] 
**fleet** | [**Fleet**](Fleet.md) |  | [optional] 
**id** | **str** | Output only. Unique id for the cluster. | [optional] [readonly] 
**identity_service_config** | [**IdentityServiceConfig**](IdentityServiceConfig.md) |  | [optional] 
**initial_cluster_version** | **str** | The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - \&quot;latest\&quot;: picks the highest valid Kubernetes version - \&quot;1.X\&quot;: picks the highest valid patch+gke.N patch in the 1.X version - \&quot;1.X.Y\&quot;: picks the highest valid gke.N patch in the 1.X.Y version - \&quot;1.X.Y-gke.N\&quot;: picks an explicit Kubernetes version - \&quot;\&quot;,\&quot;-\&quot;: picks the default Kubernetes version | [optional] 
**initial_node_count** | **int** | The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a \&quot;node_pool\&quot; object, since this configuration (along with the \&quot;node_config\&quot;) will be used to create a \&quot;NodePool\&quot; object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead. | [optional] 
**instance_group_urls** | **List[str]** | Deprecated. Use node_pools.instance_group_urls. | [optional] 
**ip_allocation_policy** | [**IPAllocationPolicy**](IPAllocationPolicy.md) |  | [optional] 
**label_fingerprint** | **str** | The fingerprint of the set of labels for this cluster. | [optional] 
**legacy_abac** | [**LegacyAbac**](LegacyAbac.md) |  | [optional] 
**location** | **str** | [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. | [optional] 
**locations** | **List[str]** | The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster&#39;s nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**logging_service** | **str** | The logging service the cluster should use to write logs. Currently available options: * &#x60;logging.googleapis.com/kubernetes&#x60; - The Cloud Logging service with a Kubernetes-native resource model * &#x60;logging.googleapis.com&#x60; - The legacy Cloud Logging service (no longer available as of GKE 1.15). * &#x60;none&#x60; - no logs will be exported from the cluster. If left as an empty string,&#x60;logging.googleapis.com/kubernetes&#x60; will be used for GKE 1.14+ or &#x60;logging.googleapis.com&#x60; for earlier versions. | [optional] 
**maintenance_policy** | [**MaintenancePolicy**](MaintenancePolicy.md) |  | [optional] 
**master** | **object** | Master is the configuration for components on master. | [optional] 
**master_auth** | [**MasterAuth**](MasterAuth.md) |  | [optional] 
**master_authorized_networks_config** | [**MasterAuthorizedNetworksConfig**](MasterAuthorizedNetworksConfig.md) |  | [optional] 
**master_ipv4_cidr_block** | **str** | The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead. | [optional] 
**mesh_certificates** | [**MeshCertificates**](MeshCertificates.md) |  | [optional] 
**monitoring_config** | [**MonitoringConfig**](MonitoringConfig.md) |  | [optional] 
**monitoring_service** | **str** | The monitoring service the cluster should use to write metrics. Currently available options: * \&quot;monitoring.googleapis.com/kubernetes\&quot; - The Cloud Monitoring service with a Kubernetes-native resource model * &#x60;monitoring.googleapis.com&#x60; - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * &#x60;none&#x60; - No metrics will be exported from the cluster. If left as an empty string,&#x60;monitoring.googleapis.com/kubernetes&#x60; will be used for GKE 1.14+ or &#x60;monitoring.googleapis.com&#x60; for earlier versions. | [optional] 
**name** | **str** | The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter. | [optional] 
**network** | **str** | The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the &#x60;default&#x60; network will be used. On output this shows the network ID instead of the name. | [optional] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**network_policy** | [**NetworkPolicy**](NetworkPolicy.md) |  | [optional] 
**node_config** | [**NodeConfig**](NodeConfig.md) |  | [optional] 
**node_ipv4_cidr_size** | **int** | [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the &#x60;container_ipv4_cidr&#x60; range. This field will only be set when cluster is in route-based network mode. | [optional] 
**node_pool_auto_config** | [**NodePoolAutoConfig**](NodePoolAutoConfig.md) |  | [optional] 
**node_pool_defaults** | [**NodePoolDefaults**](NodePoolDefaults.md) |  | [optional] 
**node_pools** | [**List[NodePool]**](NodePool.md) | The node pools associated with this cluster. This field should not be set if \&quot;node_config\&quot; or \&quot;initial_node_count\&quot; are specified. | [optional] 
**notification_config** | [**NotificationConfig**](NotificationConfig.md) |  | [optional] 
**parent_product_config** | [**ParentProductConfig**](ParentProductConfig.md) |  | [optional] 
**pod_security_policy_config** | [**PodSecurityPolicyConfig**](PodSecurityPolicyConfig.md) |  | [optional] 
**private_cluster** | **bool** | If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead. | [optional] 
**private_cluster_config** | [**PrivateClusterConfig**](PrivateClusterConfig.md) |  | [optional] 
**protect_config** | [**ProtectConfig**](ProtectConfig.md) |  | [optional] 
**release_channel** | [**ReleaseChannel**](ReleaseChannel.md) |  | [optional] 
**resource_labels** | **Dict[str, str]** | The resource labels for the cluster to use to annotate any related Google Compute Engine resources. | [optional] 
**resource_usage_export_config** | [**ResourceUsageExportConfig**](ResourceUsageExportConfig.md) |  | [optional] 
**security_posture_config** | [**SecurityPostureConfig**](SecurityPostureConfig.md) |  | [optional] 
**self_link** | **str** | [Output only] Server-defined URL for the resource. | [optional] 
**services_ipv4_cidr** | **str** | [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. &#x60;1.2.3.4/29&#x60;). Service addresses are typically put in the last &#x60;/16&#x60; from the container CIDR. | [optional] 
**shielded_nodes** | [**ShieldedNodes**](ShieldedNodes.md) |  | [optional] 
**status** | **str** | [Output only] The current status of this cluster. | [optional] 
**status_message** | **str** | [Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available. | [optional] 
**subnetwork** | **str** | The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name. | [optional] 
**tpu_config** | [**TpuConfig**](TpuConfig.md) |  | [optional] 
**tpu_ipv4_cidr_block** | **str** | [Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. &#x60;1.2.3.4/29&#x60;). | [optional] 
**vertical_pod_autoscaling** | [**VerticalPodAutoscaling**](VerticalPodAutoscaling.md) |  | [optional] 
**workload_alts_config** | [**WorkloadALTSConfig**](WorkloadALTSConfig.md) |  | [optional] 
**workload_certificates** | [**WorkloadCertificates**](WorkloadCertificates.md) |  | [optional] 
**workload_identity_config** | [**WorkloadIdentityConfig**](WorkloadIdentityConfig.md) |  | [optional] 
**zone** | **str** | [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead. | [optional] 

## Example

```python
from openapi_client.models.cluster import Cluster

# TODO update the JSON string below
json = "{}"
# create an instance of Cluster from a JSON string
cluster_instance = Cluster.from_json(json)
# print the JSON string representation of the object
print(Cluster.to_json())

# convert the object into a dict
cluster_dict = cluster_instance.to_dict()
# create an instance of Cluster from a dict
cluster_from_dict = Cluster.from_dict(cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


