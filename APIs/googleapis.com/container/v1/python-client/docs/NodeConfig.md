# NodeConfig

Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerators** | [**List[AcceleratorConfig]**](AcceleratorConfig.md) | A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs. | [optional] 
**advanced_machine_features** | [**AdvancedMachineFeatures**](AdvancedMachineFeatures.md) |  | [optional] 
**boot_disk_kms_key** | **str** |  The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption | [optional] 
**confidential_nodes** | [**ConfidentialNodes**](ConfidentialNodes.md) |  | [optional] 
**disk_size_gb** | **int** | Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB. | [optional] 
**disk_type** | **str** | Type of the disk attached to each node (e.g. &#39;pd-standard&#39;, &#39;pd-ssd&#39; or &#39;pd-balanced&#39;) If unspecified, the default disk type is &#39;pd-standard&#39; | [optional] 
**enable_confidential_storage** | **bool** | Optional. Reserved for future use. | [optional] 
**ephemeral_storage_local_ssd_config** | [**EphemeralStorageLocalSsdConfig**](EphemeralStorageLocalSsdConfig.md) |  | [optional] 
**fast_socket** | [**FastSocket**](FastSocket.md) |  | [optional] 
**gcfs_config** | [**GcfsConfig**](GcfsConfig.md) |  | [optional] 
**gvnic** | [**VirtualNIC**](VirtualNIC.md) |  | [optional] 
**image_type** | **str** | The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. | [optional] 
**kubelet_config** | [**NodeKubeletConfig**](NodeKubeletConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it&#39;s best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ | [optional] 
**linux_node_config** | [**LinuxNodeConfig**](LinuxNodeConfig.md) |  | [optional] 
**local_nvme_ssd_block_config** | [**LocalNvmeSsdBlockConfig**](LocalNvmeSsdBlockConfig.md) |  | [optional] 
**local_ssd_count** | **int** | The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. | [optional] 
**logging_config** | [**NodePoolLoggingConfig**](NodePoolLoggingConfig.md) |  | [optional] 
**machine_type** | **str** | The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types) If unspecified, the default machine type is &#x60;e2-medium&#x60;. | [optional] 
**metadata** | **Dict[str, str]** | The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp &#x60;[a-zA-Z0-9-_]+&#x60; and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - \&quot;cluster-location\&quot; - \&quot;cluster-name\&quot; - \&quot;cluster-uid\&quot; - \&quot;configure-sh\&quot; - \&quot;containerd-configure-sh\&quot; - \&quot;enable-os-login\&quot; - \&quot;gci-ensure-gke-docker\&quot; - \&quot;gci-metrics-enabled\&quot; - \&quot;gci-update-strategy\&quot; - \&quot;instance-template\&quot; - \&quot;kube-env\&quot; - \&quot;startup-script\&quot; - \&quot;user-data\&quot; - \&quot;disable-address-manager\&quot; - \&quot;windows-startup-script-ps1\&quot; - \&quot;common-psm1\&quot; - \&quot;k8s-node-setup-psm1\&quot; - \&quot;install-ssh-psm1\&quot; - \&quot;user-profile-psm1\&quot; Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value&#39;s size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB. | [optional] 
**min_cpu_platform** | **str** | Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as &#x60;minCpuPlatform: \&quot;Intel Haswell\&quot;&#x60; or &#x60;minCpuPlatform: \&quot;Intel Sandy Bridge\&quot;&#x60;. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) | [optional] 
**node_group** | **str** | Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes). | [optional] 
**oauth_scopes** | **List[str]** | The set of Google API scopes to be made available on all of the node VMs under the \&quot;default\&quot; service account. The following scopes are recommended, but not required, and by default are not included: * &#x60;https://www.googleapis.com/auth/compute&#x60; is required for mounting persistent storage on your nodes. * &#x60;https://www.googleapis.com/auth/devstorage.read_only&#x60; is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added. | [optional] 
**preemptible** | **bool** | Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances. | [optional] 
**reservation_affinity** | [**ReservationAffinity**](ReservationAffinity.md) |  | [optional] 
**resource_labels** | **Dict[str, str]** | The resource labels for the node pool to use to annotate any related Google Compute Engine resources. | [optional] 
**resource_manager_tags** | [**ResourceManagerTags**](ResourceManagerTags.md) |  | [optional] 
**sandbox_config** | [**SandboxConfig**](SandboxConfig.md) |  | [optional] 
**secondary_boot_disks** | [**List[SecondaryBootDisk]**](SecondaryBootDisk.md) | List of secondary boot disks attached to the nodes. | [optional] 
**service_account** | **str** | The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the \&quot;default\&quot; service account is used. | [optional] 
**shielded_instance_config** | [**ShieldedInstanceConfig**](ShieldedInstanceConfig.md) |  | [optional] 
**sole_tenant_config** | [**SoleTenantConfig**](SoleTenantConfig.md) |  | [optional] 
**spot** | **bool** | Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. | [optional] 
**tags** | **List[str]** | The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035. | [optional] 
**taints** | [**List[NodeTaint]**](NodeTaint.md) | List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ | [optional] 
**windows_node_config** | [**WindowsNodeConfig**](WindowsNodeConfig.md) |  | [optional] 
**workload_metadata_config** | [**WorkloadMetadataConfig**](WorkloadMetadataConfig.md) |  | [optional] 

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


