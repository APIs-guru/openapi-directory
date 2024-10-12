# Instance

The definition of a notebook instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_config** | [**AcceleratorConfig**](AcceleratorConfig.md) |  | [optional] 
**boot_disk_size_gb** | **str** | Input only. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100. | [optional] 
**boot_disk_type** | **str** | Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (&#x60;PD_STANDARD&#x60;). | [optional] 
**can_ip_forward** | **bool** | Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward | [optional] 
**container_image** | [**ContainerImage**](ContainerImage.md) |  | [optional] 
**create_time** | **str** | Output only. Instance creation time. | [optional] [readonly] 
**creator** | **str** | Output only. Email address of entity that sent original CreateInstance request. | [optional] [readonly] 
**custom_gpu_driver_path** | **str** | Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we&#39;ll automatically choose from official GPU drivers. | [optional] 
**data_disk_size_gb** | **str** | Input only. The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). You can choose the size of the data disk based on how big your notebooks and data are. If not specified, this defaults to 100. | [optional] 
**data_disk_type** | **str** | Input only. The type of the data disk attached to this instance, defaults to standard persistent disk (&#x60;PD_STANDARD&#x60;). | [optional] 
**disk_encryption** | **str** | Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. | [optional] 
**disks** | [**List[Disk]**](Disk.md) | Output only. Attached disks to notebook instance. | [optional] [readonly] 
**install_gpu_driver** | **bool** | Whether the end user authorizes Google Cloud to install GPU driver on this instance. If this field is empty or set to false, the GPU driver won&#39;t be installed. Only applicable to instances with GPUs. | [optional] 
**instance_migration_eligibility** | [**InstanceMigrationEligibility**](InstanceMigrationEligibility.md) |  | [optional] 
**instance_owners** | **List[str]** | Input only. The owner of this instance after creation. Format: &#x60;alias@example.com&#x60; Currently supports one owner only. If not specified, all of the service account users of your VM instance&#39;s service account can use the instance. | [optional] 
**kms_key** | **str** | Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: &#x60;projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}&#x60; Learn more about [using your own encryption keys](/kms/docs/quickstart). | [optional] 
**labels** | **Dict[str, str]** | Labels to apply to this instance. These can be later modified by the setLabels method. | [optional] 
**machine_type** | **str** | Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types) of this instance. | [optional] 
**metadata** | **Dict[str, str]** | Custom metadata to apply to this instance. For example, to specify a Cloud Storage bucket for automatic backup, you can use the &#x60;gcs-data-bucket&#x60; metadata tag. Format: &#x60;\&quot;--metadata&#x3D;gcs-data-bucket&#x3D;&#x60;&#x60;BUCKET&#39;&#39;\&quot;&#x60;. | [optional] 
**migrated** | **bool** | Output only. Bool indicating whether this notebook has been migrated to a Workbench Instance | [optional] [readonly] 
**name** | **str** | Output only. The name of this notebook instance. Format: &#x60;projects/{project_id}/locations/{location}/instances/{instance_id}&#x60; | [optional] [readonly] 
**network** | **str** | The name of the VPC that this instance is in. Format: &#x60;projects/{project_id}/global/networks/{network_id}&#x60; | [optional] 
**nic_type** | **str** | Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. | [optional] 
**no_proxy_access** | **bool** | If true, the notebook instance will not register with the proxy. | [optional] 
**no_public_ip** | **bool** | If true, no external IP will be assigned to this instance. | [optional] 
**no_remove_data_disk** | **bool** | Input only. If true, the data disk will not be auto deleted when deleting the instance. | [optional] 
**post_startup_script** | **str** | Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (&#x60;gs://path-to-file/file-name&#x60;). | [optional] 
**proxy_uri** | **str** | Output only. The proxy endpoint that is used to access the Jupyter notebook. | [optional] [readonly] 
**reservation_affinity** | [**ReservationAffinity**](ReservationAffinity.md) |  | [optional] 
**service_account** | **str** | The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. | [optional] 
**service_account_scopes** | **List[str]** | Optional. The URIs of service account scopes to be included in Compute Engine instances. If not specified, the following [scopes](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam) are defined: - https://www.googleapis.com/auth/cloud-platform - https://www.googleapis.com/auth/userinfo.email If not using default scopes, you need at least: https://www.googleapis.com/auth/compute | [optional] 
**shielded_instance_config** | [**ShieldedInstanceConfig**](ShieldedInstanceConfig.md) |  | [optional] 
**state** | **str** | Output only. The state of this instance. | [optional] [readonly] 
**subnet** | **str** | The name of the subnet that this instance is in. Format: &#x60;projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}&#x60; | [optional] 
**tags** | **List[str]** | Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). | [optional] 
**update_time** | **str** | Output only. Instance update time. | [optional] [readonly] 
**upgrade_history** | [**List[UpgradeHistoryEntry]**](UpgradeHistoryEntry.md) | The upgrade history of this instance. | [optional] 
**vm_image** | [**VmImage**](VmImage.md) |  | [optional] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


