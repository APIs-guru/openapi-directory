# A2AEnableProtectionInput

A2A enable protection input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_object_id** | **str** | The fabric specific object Id of the virtual machine. | [optional] 
**recovery_availability_set_id** | **str** | The recovery availability set Id. | [optional] 
**recovery_cloud_service_id** | **str** | The recovery cloud service Id. Valid for V1 scenarios. | [optional] 
**recovery_container_id** | **str** | The recovery container Id. | [optional] 
**recovery_resource_group_id** | **str** | The recovery resource group Id. Valid for V2 scenarios. | [optional] 
**vm_disks** | [**List[A2AVmDiskInputDetails]**](A2AVmDiskInputDetails.md) | The list of vm disk details. | [optional] 
**vm_managed_disks** | [**List[A2AVmManagedDiskInputDetails]**](A2AVmManagedDiskInputDetails.md) | The list of vm managed disk details. | [optional] 

## Example

```python
from openapi_client.models.a2_a_enable_protection_input import A2AEnableProtectionInput

# TODO update the JSON string below
json = "{}"
# create an instance of A2AEnableProtectionInput from a JSON string
a2_a_enable_protection_input_instance = A2AEnableProtectionInput.from_json(json)
# print the JSON string representation of the object
print(A2AEnableProtectionInput.to_json())

# convert the object into a dict
a2_a_enable_protection_input_dict = a2_a_enable_protection_input_instance.to_dict()
# create an instance of A2AEnableProtectionInput from a dict
a2_a_enable_protection_input_from_dict = A2AEnableProtectionInput.from_dict(a2_a_enable_protection_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


