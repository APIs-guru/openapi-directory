# InMageAzureV2PolicyDetails

InMage Azure v2 specific protection profile details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_consistent_frequency_in_minutes** | **int** | The app consistent snapshot frequency in minutes. | [optional] 
**crash_consistent_frequency_in_minutes** | **int** | The crash consistent snapshot frequency in minutes. | [optional] 
**multi_vm_sync_status** | **str** | A value indicating whether multi-VM sync has to be enabled. | [optional] 
**recovery_point_history** | **int** | The duration in minutes until which the recovery points need to be stored. | [optional] 
**recovery_point_threshold_in_minutes** | **int** | The recovery point threshold in minutes. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_policy_details import InMageAzureV2PolicyDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2PolicyDetails from a JSON string
in_mage_azure_v2_policy_details_instance = InMageAzureV2PolicyDetails.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2PolicyDetails.to_json())

# convert the object into a dict
in_mage_azure_v2_policy_details_dict = in_mage_azure_v2_policy_details_instance.to_dict()
# create an instance of InMageAzureV2PolicyDetails from a dict
in_mage_azure_v2_policy_details_from_dict = InMageAzureV2PolicyDetails.from_dict(in_mage_azure_v2_policy_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


