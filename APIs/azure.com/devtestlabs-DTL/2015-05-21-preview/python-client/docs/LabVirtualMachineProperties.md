# LabVirtualMachineProperties

Properties of a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_deployment_status** | [**ArtifactDeploymentStatusProperties**](ArtifactDeploymentStatusProperties.md) |  | [optional] 
**artifacts** | [**List[ArtifactInstallProperties]**](ArtifactInstallProperties.md) | The artifacts to be installed on the virtual machine. | [optional] 
**compute_id** | **str** | The resource identifier (Microsoft.Compute) of the virtual machine. | [optional] 
**created_by_user** | **str** | The email address of creator of the virtual machine. | [optional] 
**created_by_user_id** | **str** | The object identifier of the creator of the virtual machine. | [optional] 
**custom_image_id** | **str** | The custom image identifier of the virtual machine. | [optional] 
**disallow_public_ip_address** | **bool** | Indicates whether the virtual machine is to be created without a public IP address. | [optional] 
**fqdn** | **str** | The fully-qualified domain name of the virtual machine. | [optional] 
**gallery_image_reference** | [**GalleryImageReference**](GalleryImageReference.md) |  | [optional] 
**is_authentication_with_ssh_key** | **bool** | A value indicating whether this virtual machine uses an SSH key for authentication. | [optional] 
**lab_subnet_name** | **str** | The lab subnet name of the virtual machine. | [optional] 
**lab_virtual_network_id** | **str** | The lab virtual network identifier of the virtual machine. | [optional] 
**notes** | **str** | The notes of the virtual machine. | [optional] 
**os_type** | **str** | The OS type of the virtual machine. | [optional] 
**owner_object_id** | **str** | The object identifier of the owner of the virtual machine. | [optional] 
**password** | **str** | The password of the virtual machine administrator. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**size** | **str** | The size of the virtual machine. | [optional] 
**ssh_key** | **str** | The SSH key of the virtual machine administrator. | [optional] 
**user_name** | **str** | The user name of the virtual machine. | [optional] 

## Example

```python
from openapi_client.models.lab_virtual_machine_properties import LabVirtualMachineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabVirtualMachineProperties from a JSON string
lab_virtual_machine_properties_instance = LabVirtualMachineProperties.from_json(json)
# print the JSON string representation of the object
print(LabVirtualMachineProperties.to_json())

# convert the object into a dict
lab_virtual_machine_properties_dict = lab_virtual_machine_properties_instance.to_dict()
# create an instance of LabVirtualMachineProperties from a dict
lab_virtual_machine_properties_from_dict = LabVirtualMachineProperties.from_dict(lab_virtual_machine_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


