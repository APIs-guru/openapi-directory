# VirtualMachineConfig

The config settings for virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_config** | [**RuntimeAcceleratorConfig**](RuntimeAcceleratorConfig.md) |  | [optional] 
**boot_image** | **object** | Definition of the boot image used by the Runtime. Used to facilitate runtime upgradeability. | [optional] 
**container_images** | [**List[ContainerImage]**](ContainerImage.md) | Optional. Use a list of container images to use as Kernels in the notebook instance. | [optional] 
**data_disk** | [**LocalDisk**](LocalDisk.md) |  | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**guest_attributes** | **Dict[str, str]** | Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)). | [optional] [readonly] 
**internal_ip_only** | **bool** | Optional. If true, runtime will only have internal IP addresses. By default, runtimes are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each vm. This &#x60;internal_ip_only&#x60; restriction can only be enabled for subnetwork enabled networks, and all dependencies must be configured to be accessible without external IP addresses. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. | [optional] 
**machine_type** | **str** | Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples: * &#x60;n1-standard-2&#x60; * &#x60;e2-standard-8&#x60; | [optional] 
**metadata** | **Dict[str, str]** | Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). | [optional] 
**network** | **str** | Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither &#x60;network&#x60; nor &#x60;subnet&#x60; is specified, the \&quot;default\&quot; network of the project is used, if it exists. A full URL or partial URI. Examples: * &#x60;https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default&#x60; * &#x60;projects/[project_id]/global/networks/default&#x60; Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations: * Google Managed Network (Network &amp; subnet are empty) * Consumer Project VPC (network &amp; subnet are required). Requires configuring Private Service Access. * Shared VPC (network &amp; subnet are required). Requires configuring Private Service Access. | [optional] 
**nic_type** | **str** | Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. | [optional] 
**reserved_ip_range** | **str** | Optional. Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it&#39;s assigned. Example: managed-notebooks-range-c PEERING_RANGE_NAME_3&#x3D;managed-notebooks-range-c gcloud compute addresses create $PEERING_RANGE_NAME_3 \\ --global \\ --prefix-length&#x3D;24 \\ --description&#x3D;\&quot;Google Cloud Managed Notebooks Range 24 c\&quot; \\ --network&#x3D;$NETWORK \\ --addresses&#x3D;192.168.0.0 \\ --purpose&#x3D;VPC_PEERING Field value will be: &#x60;managed-notebooks-range-c&#x60; | [optional] 
**shielded_instance_config** | [**RuntimeShieldedInstanceConfig**](RuntimeShieldedInstanceConfig.md) |  | [optional] 
**subnet** | **str** | Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network. A full URL or partial URI are valid. Examples: * &#x60;https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0&#x60; * &#x60;projects/[project_id]/regions/us-east1/subnetworks/sub0&#x60; | [optional] 
**tags** | **List[str]** | Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). | [optional] 
**zone** | **str** | Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example: * &#x60;us-central1-b&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_config import VirtualMachineConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineConfig from a JSON string
virtual_machine_config_instance = VirtualMachineConfig.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineConfig.to_json())

# convert the object into a dict
virtual_machine_config_dict = virtual_machine_config_instance.to_dict()
# create an instance of VirtualMachineConfig from a dict
virtual_machine_config_from_dict = VirtualMachineConfig.from_dict(virtual_machine_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


