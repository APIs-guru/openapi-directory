# LabVirtualMachineCreationParameterProperties

Properties for virtual machine creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_claim** | **bool** | Indicates whether another user can take ownership of the virtual machine | [optional] 
**artifact_deployment_status** | [**ArtifactDeploymentStatusProperties**](ArtifactDeploymentStatusProperties.md) |  | [optional] 
**artifacts** | [**List[ArtifactInstallProperties]**](ArtifactInstallProperties.md) | The artifacts to be installed on the virtual machine. | [optional] 
**bulk_creation_parameters** | [**BulkCreationParameters**](BulkCreationParameters.md) |  | [optional] 
**compute_id** | **str** | The resource identifier (Microsoft.Compute) of the virtual machine. | [optional] 
**created_by_user** | **str** | The email address of creator of the virtual machine. | [optional] 
**created_by_user_id** | **str** | The object identifier of the creator of the virtual machine. | [optional] 
**created_date** | **datetime** | The creation date of the virtual machine. | [optional] 
**custom_image_id** | **str** | The custom image identifier of the virtual machine. | [optional] 
**data_disk_parameters** | [**List[DataDiskProperties]**](DataDiskProperties.md) | New or existing data disks to attach to the virtual machine after creation | [optional] 
**disallow_public_ip_address** | **bool** | Indicates whether the virtual machine is to be created without a public IP address. | [optional] 
**environment_id** | **str** | The resource ID of the environment that contains this virtual machine, if any. | [optional] 
**expiration_date** | **datetime** | The expiration date for VM. | [optional] 
**fqdn** | **str** | The fully-qualified domain name of the virtual machine. | [optional] 
**gallery_image_reference** | [**GalleryImageReference**](GalleryImageReference.md) |  | [optional] 
**is_authentication_with_ssh_key** | **bool** | Indicates whether this virtual machine uses an SSH key for authentication. | [optional] 
**lab_subnet_name** | **str** | The lab subnet name of the virtual machine. | [optional] 
**lab_virtual_network_id** | **str** | The lab virtual network identifier of the virtual machine. | [optional] 
**last_known_power_state** | **str** | Last known compute power state captured in DTL | [optional] 
**network_interface** | [**NetworkInterfaceProperties**](NetworkInterfaceProperties.md) |  | [optional] 
**notes** | **str** | The notes of the virtual machine. | [optional] 
**os_type** | **str** | The OS type of the virtual machine. | [optional] 
**owner_object_id** | **str** | The object identifier of the owner of the virtual machine. | [optional] 
**owner_user_principal_name** | **str** | The user principal name of the virtual machine owner. | [optional] 
**password** | **str** | The password of the virtual machine administrator. | [optional] 
**plan_id** | **str** | The id of the plan associated with the virtual machine image | [optional] 
**schedule_parameters** | [**List[ScheduleCreationParameter]**](ScheduleCreationParameter.md) | Virtual Machine schedules to be created | [optional] 
**size** | **str** | The size of the virtual machine. | [optional] 
**ssh_key** | **str** | The SSH key of the virtual machine administrator. | [optional] 
**storage_type** | **str** | Storage type to use for virtual machine (i.e. Standard, Premium). | [optional] 
**user_name** | **str** | The user name of the virtual machine. | [optional] 
**virtual_machine_creation_source** | **str** | Tells source of creation of lab virtual machine. Output property only. | [optional] 

## Example

```python
from openapi_client.models.lab_virtual_machine_creation_parameter_properties import LabVirtualMachineCreationParameterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabVirtualMachineCreationParameterProperties from a JSON string
lab_virtual_machine_creation_parameter_properties_instance = LabVirtualMachineCreationParameterProperties.from_json(json)
# print the JSON string representation of the object
print(LabVirtualMachineCreationParameterProperties.to_json())

# convert the object into a dict
lab_virtual_machine_creation_parameter_properties_dict = lab_virtual_machine_creation_parameter_properties_instance.to_dict()
# create an instance of LabVirtualMachineCreationParameterProperties from a dict
lab_virtual_machine_creation_parameter_properties_from_dict = LabVirtualMachineCreationParameterProperties.from_dict(lab_virtual_machine_creation_parameter_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


