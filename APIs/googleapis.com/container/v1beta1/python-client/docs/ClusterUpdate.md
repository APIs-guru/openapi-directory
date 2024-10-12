# ClusterUpdate

ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_pod_ranges_config** | [**AdditionalPodRangesConfig**](AdditionalPodRangesConfig.md) |  | [optional] 
**desired_addons_config** | [**AddonsConfig**](AddonsConfig.md) |  | [optional] 
**desired_authenticator_groups_config** | [**AuthenticatorGroupsConfig**](AuthenticatorGroupsConfig.md) |  | [optional] 
**desired_autopilot_workload_policy_config** | [**WorkloadPolicyConfig**](WorkloadPolicyConfig.md) |  | [optional] 
**desired_binary_authorization** | [**BinaryAuthorization**](BinaryAuthorization.md) |  | [optional] 
**desired_cluster_autoscaling** | [**ClusterAutoscaling**](ClusterAutoscaling.md) |  | [optional] 
**desired_cluster_telemetry** | [**ClusterTelemetry**](ClusterTelemetry.md) |  | [optional] 
**desired_cost_management_config** | [**CostManagementConfig**](CostManagementConfig.md) |  | [optional] 
**desired_database_encryption** | [**DatabaseEncryption**](DatabaseEncryption.md) |  | [optional] 
**desired_datapath_provider** | **str** | The desired datapath provider for the cluster. | [optional] 
**desired_default_snat_status** | [**DefaultSnatStatus**](DefaultSnatStatus.md) |  | [optional] 
**desired_dns_config** | [**DNSConfig**](DNSConfig.md) |  | [optional] 
**desired_enable_fqdn_network_policy** | **bool** | Enable/Disable FQDN Network Policy for the cluster. | [optional] 
**desired_enable_private_endpoint** | **bool** | Enable/Disable private endpoint for the cluster&#39;s master. | [optional] 
**desired_fleet** | [**Fleet**](Fleet.md) |  | [optional] 
**desired_gateway_api_config** | [**GatewayAPIConfig**](GatewayAPIConfig.md) |  | [optional] 
**desired_gcfs_config** | [**GcfsConfig**](GcfsConfig.md) |  | [optional] 
**desired_host_maintenance_policy** | [**HostMaintenancePolicy**](HostMaintenancePolicy.md) |  | [optional] 
**desired_identity_service_config** | [**IdentityServiceConfig**](IdentityServiceConfig.md) |  | [optional] 
**desired_image_type** | **str** | The desired image type for the node pool. NOTE: Set the \&quot;desired_node_pool\&quot; field as well. | [optional] 
**desired_in_transit_encryption_config** | **str** | Specify the details of in-transit encryption. | [optional] 
**desired_intra_node_visibility_config** | [**IntraNodeVisibilityConfig**](IntraNodeVisibilityConfig.md) |  | [optional] 
**desired_k8s_beta_apis** | [**K8sBetaAPIConfig**](K8sBetaAPIConfig.md) |  | [optional] 
**desired_l4ilb_subsetting_config** | [**ILBSubsettingConfig**](ILBSubsettingConfig.md) |  | [optional] 
**desired_locations** | **List[str]** | The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster&#39;s nodes should be located. This list must always include the cluster&#39;s primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed. | [optional] 
**desired_logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**desired_logging_service** | **str** | The logging service the cluster should use to write logs. Currently available options: * &#x60;logging.googleapis.com/kubernetes&#x60; - The Cloud Logging service with a Kubernetes-native resource model * &#x60;logging.googleapis.com&#x60; - The legacy Cloud Logging service (no longer available as of GKE 1.15). * &#x60;none&#x60; - no logs will be exported from the cluster. If left as an empty string,&#x60;logging.googleapis.com/kubernetes&#x60; will be used for GKE 1.14+ or &#x60;logging.googleapis.com&#x60; for earlier versions. | [optional] 
**desired_master** | **object** | Master is the configuration for components on master. | [optional] 
**desired_master_authorized_networks_config** | [**MasterAuthorizedNetworksConfig**](MasterAuthorizedNetworksConfig.md) |  | [optional] 
**desired_master_version** | **str** | The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - \&quot;latest\&quot;: picks the highest valid Kubernetes version - \&quot;1.X\&quot;: picks the highest valid patch+gke.N patch in the 1.X version - \&quot;1.X.Y\&quot;: picks the highest valid gke.N patch in the 1.X.Y version - \&quot;1.X.Y-gke.N\&quot;: picks an explicit Kubernetes version - \&quot;-\&quot;: picks the default Kubernetes version | [optional] 
**desired_mesh_certificates** | [**MeshCertificates**](MeshCertificates.md) |  | [optional] 
**desired_monitoring_config** | [**MonitoringConfig**](MonitoringConfig.md) |  | [optional] 
**desired_monitoring_service** | **str** | The monitoring service the cluster should use to write metrics. Currently available options: * \&quot;monitoring.googleapis.com/kubernetes\&quot; - The Cloud Monitoring service with a Kubernetes-native resource model * &#x60;monitoring.googleapis.com&#x60; - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * &#x60;none&#x60; - No metrics will be exported from the cluster. If left as an empty string,&#x60;monitoring.googleapis.com/kubernetes&#x60; will be used for GKE 1.14+ or &#x60;monitoring.googleapis.com&#x60; for earlier versions. | [optional] 
**desired_network_performance_config** | [**ClusterNetworkPerformanceConfig**](ClusterNetworkPerformanceConfig.md) |  | [optional] 
**desired_node_pool_auto_config_network_tags** | [**NetworkTags**](NetworkTags.md) |  | [optional] 
**desired_node_pool_auto_config_resource_manager_tags** | [**ResourceManagerTags**](ResourceManagerTags.md) |  | [optional] 
**desired_node_pool_autoscaling** | [**NodePoolAutoscaling**](NodePoolAutoscaling.md) |  | [optional] 
**desired_node_pool_id** | **str** | The node pool to be upgraded. This field is mandatory if \&quot;desired_node_version\&quot;, \&quot;desired_image_family\&quot;, \&quot;desired_node_pool_autoscaling\&quot;, or \&quot;desired_workload_metadata_config\&quot; is specified and there is more than one node pool on the cluster. | [optional] 
**desired_node_pool_logging_config** | [**NodePoolLoggingConfig**](NodePoolLoggingConfig.md) |  | [optional] 
**desired_node_version** | **str** | The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - \&quot;latest\&quot;: picks the highest valid Kubernetes version - \&quot;1.X\&quot;: picks the highest valid patch+gke.N patch in the 1.X version - \&quot;1.X.Y\&quot;: picks the highest valid gke.N patch in the 1.X.Y version - \&quot;1.X.Y-gke.N\&quot;: picks an explicit Kubernetes version - \&quot;-\&quot;: picks the Kubernetes master version | [optional] 
**desired_notification_config** | [**NotificationConfig**](NotificationConfig.md) |  | [optional] 
**desired_parent_product_config** | [**ParentProductConfig**](ParentProductConfig.md) |  | [optional] 
**desired_pod_security_policy_config** | [**PodSecurityPolicyConfig**](PodSecurityPolicyConfig.md) |  | [optional] 
**desired_private_cluster_config** | [**PrivateClusterConfig**](PrivateClusterConfig.md) |  | [optional] 
**desired_private_ipv6_google_access** | **str** | The desired state of IPv6 connectivity to Google Services. | [optional] 
**desired_protect_config** | [**ProtectConfig**](ProtectConfig.md) |  | [optional] 
**desired_release_channel** | [**ReleaseChannel**](ReleaseChannel.md) |  | [optional] 
**desired_resource_usage_export_config** | [**ResourceUsageExportConfig**](ResourceUsageExportConfig.md) |  | [optional] 
**desired_security_posture_config** | [**SecurityPostureConfig**](SecurityPostureConfig.md) |  | [optional] 
**desired_service_external_ips_config** | [**ServiceExternalIPsConfig**](ServiceExternalIPsConfig.md) |  | [optional] 
**desired_shielded_nodes** | [**ShieldedNodes**](ShieldedNodes.md) |  | [optional] 
**desired_stack_type** | **str** | The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type. | [optional] 
**desired_tpu_config** | [**TpuConfig**](TpuConfig.md) |  | [optional] 
**desired_vertical_pod_autoscaling** | [**VerticalPodAutoscaling**](VerticalPodAutoscaling.md) |  | [optional] 
**desired_workload_alts_config** | [**WorkloadALTSConfig**](WorkloadALTSConfig.md) |  | [optional] 
**desired_workload_certificates** | [**WorkloadCertificates**](WorkloadCertificates.md) |  | [optional] 
**desired_workload_identity_config** | [**WorkloadIdentityConfig**](WorkloadIdentityConfig.md) |  | [optional] 
**enable_k8s_beta_apis** | [**K8sBetaAPIConfig**](K8sBetaAPIConfig.md) |  | [optional] 
**etag** | **str** | The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned. | [optional] 
**removed_additional_pod_ranges_config** | [**AdditionalPodRangesConfig**](AdditionalPodRangesConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_update import ClusterUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpdate from a JSON string
cluster_update_instance = ClusterUpdate.from_json(json)
# print the JSON string representation of the object
print(ClusterUpdate.to_json())

# convert the object into a dict
cluster_update_dict = cluster_update_instance.to_dict()
# create an instance of ClusterUpdate from a dict
cluster_update_from_dict = ClusterUpdate.from_dict(cluster_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


