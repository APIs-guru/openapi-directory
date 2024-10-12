# ComputeEngineTargetDefaults

ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_licenses** | **List[str]** | Additional licenses to assign to the VM. | [optional] 
**applied_license** | [**AppliedLicense**](AppliedLicense.md) |  | [optional] 
**boot_option** | **str** | Output only. The VM Boot Option, as set in the source VM. | [optional] [readonly] 
**compute_scheduling** | [**ComputeScheduling**](ComputeScheduling.md) |  | [optional] 
**disk_type** | **str** | The disk type to use in the VM. | [optional] 
**encryption** | [**Encryption**](Encryption.md) |  | [optional] 
**hostname** | **str** | The hostname to assign to the VM. | [optional] 
**labels** | **Dict[str, str]** | A map of labels to associate with the VM. | [optional] 
**license_type** | **str** | The license type to use in OS adaptation. | [optional] 
**machine_type** | **str** | The machine type to create the VM with. | [optional] 
**machine_type_series** | **str** | The machine type series to create the VM with. | [optional] 
**metadata** | **Dict[str, str]** | The metadata key/value pairs to assign to the VM. | [optional] 
**network_interfaces** | [**List[NetworkInterface]**](NetworkInterface.md) | List of NICs connected to this VM. | [optional] 
**network_tags** | **List[str]** | A list of network tags to associate with the VM. | [optional] 
**secure_boot** | **bool** | Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. | [optional] 
**service_account** | **str** | The service account to associate the VM with. | [optional] 
**target_project** | **str** | The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM. | [optional] 
**vm_name** | **str** | The name of the VM to create. | [optional] 
**zone** | **str** | The zone in which to create the VM. | [optional] 

## Example

```python
from openapi_client.models.compute_engine_target_defaults import ComputeEngineTargetDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeEngineTargetDefaults from a JSON string
compute_engine_target_defaults_instance = ComputeEngineTargetDefaults.from_json(json)
# print the JSON string representation of the object
print(ComputeEngineTargetDefaults.to_json())

# convert the object into a dict
compute_engine_target_defaults_dict = compute_engine_target_defaults_instance.to_dict()
# create an instance of ComputeEngineTargetDefaults from a dict
compute_engine_target_defaults_from_dict = ComputeEngineTargetDefaults.from_dict(compute_engine_target_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


