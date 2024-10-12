# InMageReprotectInput

InMageAzureV2 specific provider input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datastore_name** | **str** | The target data store name. | [optional] 
**disk_exclusion_input** | [**InMageDiskExclusionInput**](InMageDiskExclusionInput.md) |  | [optional] 
**disks_to_include** | **List[str]** | The disks to include list. | [optional] 
**master_target_id** | **str** | The Master Target Id. | 
**process_server_id** | **str** | The Process Server Id. | 
**profile_id** | **str** | The Policy Id. | 
**retention_drive** | **str** | The retention drive to use on the MT. | 
**run_as_account_id** | **str** | The CS account Id. | [optional] 

## Example

```python
from openapi_client.models.in_mage_reprotect_input import InMageReprotectInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageReprotectInput from a JSON string
in_mage_reprotect_input_instance = InMageReprotectInput.from_json(json)
# print the JSON string representation of the object
print(InMageReprotectInput.to_json())

# convert the object into a dict
in_mage_reprotect_input_dict = in_mage_reprotect_input_instance.to_dict()
# create an instance of InMageReprotectInput from a dict
in_mage_reprotect_input_from_dict = InMageReprotectInput.from_dict(in_mage_reprotect_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


