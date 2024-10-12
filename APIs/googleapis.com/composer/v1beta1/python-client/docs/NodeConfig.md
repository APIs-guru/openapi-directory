# NodeConfig

The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**composer_internal_ipv4_cidr_block** | **str** | Optional. The IP range in CIDR notation to use internally by Cloud Composer. IP addresses are not reserved - and the same range can be used by multiple Cloud Composer environments. In case of overlap, IPs from this range will not be accessible in the user&#39;s VPC network. Cannot be updated. If not specified, the default value of &#39;100.64.128.0/20&#39; is used. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. | [optional] 
**composer_network_attachment** | **str** | Optional. Network Attachment that Cloud Composer environment is connected to, which provides connectivity with a user&#39;s VPC network. Takes precedence over network and subnetwork settings. If not provided, but network and subnetwork are defined during environment, it will be provisioned. If not provided and network and subnetwork are also empty, then connectivity to user&#39;s VPC network is disabled. Network attachment must be provided in format projects/{project}/regions/{region}/networkAttachments/{networkAttachment}. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. | [optional] 
**disk_size_gb** | **int** | Optional. The disk size in GB used for node VMs. Minimum size is 30GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] 
**enable_ip_masq_agent** | **bool** | Optional. Deploys &#39;ip-masq-agent&#39; daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent | [optional] 
**ip_allocation_policy** | [**IPAllocationPolicy**](IPAllocationPolicy.md) |  | [optional] 
**location** | **str** | Optional. The Compute Engine [zone](/compute/docs/regions-zones) in which to deploy the VMs used to run the Apache Airflow software, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: \&quot;projects/{projectId}/zones/{zoneId}\&quot;. This &#x60;location&#x60; must belong to the enclosing environment&#39;s project and location. If both this field and &#x60;nodeConfig.machineType&#x60; are specified, &#x60;nodeConfig.machineType&#x60; must belong to this &#x60;location&#x60;; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If only one field (&#x60;location&#x60; or &#x60;nodeConfig.machineType&#x60;) is specified, the location information from the specified field will be propagated to the unspecified field. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] 
**machine_type** | **str** | Optional. The Compute Engine [machine type](/compute/docs/machine-types) used for cluster instances, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: \&quot;projects/{projectId}/zones/{zoneId}/machineTypes/{machineTypeId}\&quot;. The &#x60;machineType&#x60; must belong to the enclosing environment&#39;s project and location. If both this field and &#x60;nodeConfig.location&#x60; are specified, this &#x60;machineType&#x60; must belong to the &#x60;nodeConfig.location&#x60;; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If exactly one of this field and &#x60;nodeConfig.location&#x60; is specified, the location information from the specified field will be propagated to the unspecified field. The &#x60;machineTypeId&#x60; must not be a [shared-core machine type](/compute/docs/machine-types#sharedcore). If this field is unspecified, the &#x60;machineTypeId&#x60; defaults to \&quot;n1-standard-1\&quot;. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] 
**max_pods_per_node** | **int** | Optional. The maximum number of pods per node in the Cloud Composer GKE cluster. The value must be between 8 and 110 and it can be set only if the environment is VPC-native. The default value is 32. Values of this field will be propagated both to the &#x60;default-pool&#x60; node pool of the newly created GKE cluster, and to the default \&quot;Maximum Pods per Node\&quot; value which is used for newly created node pools if their value is not explicitly set during node pool creation. For more information, see [Optimizing IP address allocation] (https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr). Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] 
**network** | **str** | Optional. The Compute Engine network to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: \&quot;projects/{projectId}/global/networks/{networkId}\&quot;. If unspecified, the default network in the environment&#39;s project is used. If a [Custom Subnet Network](/vpc/docs/vpc#vpc_networks_and_subnets) is provided, &#x60;nodeConfig.subnetwork&#x60; must also be provided. For [Shared VPC](/vpc/docs/shared-vpc) subnetwork requirements, see &#x60;nodeConfig.subnetwork&#x60;. | [optional] 
**oauth_scopes** | **List[str]** | Optional. The set of Google API scopes to be made available on all node VMs. If &#x60;oauth_scopes&#x60; is empty, defaults to [\&quot;https://www.googleapis.com/auth/cloud-platform\&quot;]. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] 
**service_account** | **str** | Optional. The Google Cloud Platform Service Account to be used by the workloads. If a service account is not specified, the \&quot;default\&quot; Compute Engine service account is used. Cannot be updated. | [optional] 
**subnetwork** | **str** | Optional. The Compute Engine subnetwork to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: \&quot;projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}\&quot; If a subnetwork is provided, &#x60;nodeConfig.network&#x60; must also be provided, and the subnetwork must belong to the enclosing environment&#39;s project and location. | [optional] 
**tags** | **List[str]** | Optional. The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Cannot be updated. | [optional] 

## Example

```python
from openapi_client.models.node_config import NodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NodeConfig from a JSON string
node_config_instance = NodeConfig.from_json(json)
# print the JSON string representation of the object
print(NodeConfig.to_json())

# convert the object into a dict
node_config_dict = node_config_instance.to_dict()
# create an instance of NodeConfig from a dict
node_config_from_dict = NodeConfig.from_dict(node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


