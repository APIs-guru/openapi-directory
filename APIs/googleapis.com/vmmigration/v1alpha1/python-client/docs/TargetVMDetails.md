# TargetVMDetails

TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_license** | [**AppliedLicense**](AppliedLicense.md) |  | [optional] 
**boot_option** | **str** | Output only. The VM Boot Option, as set in the source VM. | [optional] [readonly] 
**compute_scheduling** | [**ComputeScheduling**](ComputeScheduling.md) |  | [optional] 
**disk_type** | **str** | The disk type to use in the VM. | [optional] 
**external_ip** | **str** | The external IP to define in the VM. | [optional] 
**internal_ip** | **str** | The internal IP to define in the VM. The formats accepted are: &#x60;ephemeral&#x60; \\ ipv4 address \\ a named address resource full path. | [optional] 
**labels** | **Dict[str, str]** | A map of labels to associate with the VM. | [optional] 
**license_type** | **str** | The license type to use in OS adaptation. | [optional] 
**machine_type** | **str** | The machine type to create the VM with. | [optional] 
**machine_type_series** | **str** | The machine type series to create the VM with. | [optional] 
**metadata** | **Dict[str, str]** | The metadata key/value pairs to assign to the VM. | [optional] 
**name** | **str** | The name of the VM to create. | [optional] 
**network** | **str** | The network to connect the VM to. | [optional] 
**network_interfaces** | [**List[NetworkInterface]**](NetworkInterface.md) | List of NICs connected to this VM. | [optional] 
**network_tags** | **List[str]** | A list of network tags to associate with the VM. | [optional] 
**project** | **str** | Output only. The project in which to create the VM. | [optional] [readonly] 
**secure_boot** | **bool** | Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI. | [optional] 
**service_account** | **str** | The service account to associate the VM with. | [optional] 
**subnetwork** | **str** | The subnetwork to connect the VM to. | [optional] 
**target_project** | **str** | The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM. | [optional] 
**zone** | **str** | The zone in which to create the VM. | [optional] 

## Example

```python
from openapi_client.models.target_vm_details import TargetVMDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TargetVMDetails from a JSON string
target_vm_details_instance = TargetVMDetails.from_json(json)
# print the JSON string representation of the object
print(TargetVMDetails.to_json())

# convert the object into a dict
target_vm_details_dict = target_vm_details_instance.to_dict()
# create an instance of TargetVMDetails from a dict
target_vm_details_from_dict = TargetVMDetails.from_dict(target_vm_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


