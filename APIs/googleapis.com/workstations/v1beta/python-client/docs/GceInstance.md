# GceInstance

A runtime using a Compute Engine instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerators** | [**List[Accelerator]**](Accelerator.md) | Optional. A list of the type and count of accelerator cards attached to the instance. | [optional] 
**boot_disk_size_gb** | **int** | Optional. The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is &#x60;30&#x60; GB. Defaults to &#x60;50&#x60; GB. | [optional] 
**confidential_instance_config** | [**GceConfidentialInstanceConfig**](GceConfidentialInstanceConfig.md) |  | [optional] 
**disable_public_ip_addresses** | **bool** | Optional. When set to true, disables public IP addresses for VMs. If you disable public IP addresses, you must set up Private Google Access or Cloud NAT on your network. If you use Private Google Access and you use &#x60;private.googleapis.com&#x60; or &#x60;restricted.googleapis.com&#x60; for Container Registry and Artifact Registry, make sure that you set up DNS records for domains &#x60;*.gcr.io&#x60; and &#x60;*.pkg.dev&#x60;. Defaults to false (VMs have public IP addresses). | [optional] 
**disable_ssh** | **bool** | Optional. Whether to disable SSH access to the VM. | [optional] 
**enable_nested_virtualization** | **bool** | Optional. Whether to enable nested virtualization on Cloud Workstations VMs created under this workstation configuration. Nested virtualization lets you run virtual machine (VM) instances inside your workstation. Before enabling nested virtualization, consider the following important considerations. Cloud Workstations instances are subject to the [same restrictions as Compute Engine instances](https://cloud.google.com/compute/docs/instances/nested-virtualization/overview#restrictions): * **Organization policy**: projects, folders, or organizations may be restricted from creating nested VMs if the **Disable VM nested virtualization** constraint is enforced in the organization policy. For more information, see the Compute Engine section, [Checking whether nested virtualization is allowed](https://cloud.google.com/compute/docs/instances/nested-virtualization/managing-constraint#checking_whether_nested_virtualization_is_allowed). * **Performance**: nested VMs might experience a 10% or greater decrease in performance for workloads that are CPU-bound and possibly greater than a 10% decrease for workloads that are input/output bound. * **Machine Type**: nested virtualization can only be enabled on workstation configurations that specify a machine_type in the N1 or N2 machine series. * **GPUs**: nested virtualization may not be enabled on workstation configurations with accelerators. * **Operating System**: Because [Container-Optimized OS](https://cloud.google.com/compute/docs/images/os-details#container-optimized_os_cos) does not support nested virtualization, when nested virtualization is enabled, the underlying Compute Engine VM instances boot from an [Ubuntu LTS](https://cloud.google.com/compute/docs/images/os-details#ubuntu_lts) image. | [optional] 
**machine_type** | **str** | Optional. The type of machine to use for VM instances—for example, &#x60;\&quot;e2-standard-4\&quot;&#x60;. For more information about machine types that Cloud Workstations supports, see the list of [available machine types](https://cloud.google.com/workstations/docs/available-machine-types). | [optional] 
**pool_size** | **int** | Optional. The number of VMs that the system should keep idle so that new workstations can be started quickly for new users. Defaults to &#x60;0&#x60; in the API. | [optional] 
**pooled_instances** | **int** | Output only. Number of instances currently available in the pool for faster workstation startup. | [optional] [readonly] 
**service_account** | **str** | Optional. The email address of the service account for Cloud Workstations VMs created with this configuration. When specified, be sure that the service account has &#x60;logginglogEntries.create&#x60; permission on the project so it can write logs out to Cloud Logging. If using a custom container image, the service account must have [Artifact Registry Reader](https://cloud.google.com/artifact-registry/docs/access-control#roles) permission to pull the specified image. If you as the administrator want to be able to &#x60;ssh&#x60; into the underlying VM, you need to set this value to a service account for which you have the &#x60;iam.serviceAccounts.actAs&#x60; permission. Conversely, if you don&#39;t want anyone to be able to &#x60;ssh&#x60; into the underlying VM, use a service account where no one has that permission. If not set, VMs run with a service account provided by the Cloud Workstations service, and the image must be publicly accessible. | [optional] 
**service_account_scopes** | **List[str]** | Optional. Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have &#x60;iam.serviceAccounts.actAs&#x60; on the service account. | [optional] 
**shielded_instance_config** | [**GceShieldedInstanceConfig**](GceShieldedInstanceConfig.md) |  | [optional] 
**tags** | **List[str]** | Optional. Network tags to add to the Compute Engine VMs backing the workstations. This option applies [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags) to VMs created with this configuration. These network tags enable the creation of [firewall rules](https://cloud.google.com/workstations/docs/configure-firewall-rules). | [optional] 

## Example

```python
from openapi_client.models.gce_instance import GceInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GceInstance from a JSON string
gce_instance_instance = GceInstance.from_json(json)
# print the JSON string representation of the object
print(GceInstance.to_json())

# convert the object into a dict
gce_instance_dict = gce_instance_instance.to_dict()
# create an instance of GceInstance from a dict
gce_instance_from_dict = GceInstance.from_dict(gce_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


