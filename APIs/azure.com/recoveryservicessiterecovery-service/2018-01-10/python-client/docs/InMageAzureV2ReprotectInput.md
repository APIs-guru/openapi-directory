# InMageAzureV2ReprotectInput

InMageAzureV2 specific provider input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disks_to_include** | **List[str]** | The disks to include list. | [optional] 
**log_storage_account_id** | **str** | The storage account to be used for logging during replication. | [optional] 
**master_target_id** | **str** | The Master target Id. | [optional] 
**policy_id** | **str** | The Policy Id. | [optional] 
**process_server_id** | **str** | The Process Server Id. | [optional] 
**run_as_account_id** | **str** | The CS account Id. | [optional] 
**storage_account_id** | **str** | The storage account id. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_reprotect_input import InMageAzureV2ReprotectInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2ReprotectInput from a JSON string
in_mage_azure_v2_reprotect_input_instance = InMageAzureV2ReprotectInput.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2ReprotectInput.to_json())

# convert the object into a dict
in_mage_azure_v2_reprotect_input_dict = in_mage_azure_v2_reprotect_input_instance.to_dict()
# create an instance of InMageAzureV2ReprotectInput from a dict
in_mage_azure_v2_reprotect_input_from_dict = InMageAzureV2ReprotectInput.from_dict(in_mage_azure_v2_reprotect_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


