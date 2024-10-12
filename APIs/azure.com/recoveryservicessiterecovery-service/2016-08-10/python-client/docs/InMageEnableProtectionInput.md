# InMageEnableProtectionInput

VMware Azure specific enable protection input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datastore_name** | **str** | The target data store name. | [optional] 
**disk_exclusion_input** | [**InMageDiskExclusionInput**](InMageDiskExclusionInput.md) |  | [optional] 
**disks_to_include** | **List[str]** | The disks to include list. | [optional] 
**master_target_id** | **str** | The Master Target Id. | 
**multi_vm_group_id** | **str** | The multi vm group Id. | 
**multi_vm_group_name** | **str** | The multi vm group name. | 
**process_server_id** | **str** | The Process Server Id. | 
**retention_drive** | **str** | The retention drive to use on the MT. | 
**run_as_account_id** | **str** | The CS account Id. | [optional] 
**vm_friendly_name** | **str** | The Vm Name. | [optional] 

## Example

```python
from openapi_client.models.in_mage_enable_protection_input import InMageEnableProtectionInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageEnableProtectionInput from a JSON string
in_mage_enable_protection_input_instance = InMageEnableProtectionInput.from_json(json)
# print the JSON string representation of the object
print(InMageEnableProtectionInput.to_json())

# convert the object into a dict
in_mage_enable_protection_input_dict = in_mage_enable_protection_input_instance.to_dict()
# create an instance of InMageEnableProtectionInput from a dict
in_mage_enable_protection_input_from_dict = InMageEnableProtectionInput.from_dict(in_mage_enable_protection_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


