# InMageAzureV2PolicyInput

VMWare Azure specific policy Input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_consistent_frequency_in_minutes** | **int** | The app consistent snapshot frequency (in minutes). | [optional] 
**crash_consistent_frequency_in_minutes** | **int** | The crash consistent snapshot frequency (in minutes). | [optional] 
**multi_vm_sync_status** | **str** | A value indicating whether multi-VM sync has to be enabled. Value should be &#39;Enabled&#39; or &#39;Disabled&#39;. | 
**recovery_point_history** | **int** | The duration in minutes until which the recovery points need to be stored. | [optional] 
**recovery_point_threshold_in_minutes** | **int** | The recovery point threshold in minutes. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_policy_input import InMageAzureV2PolicyInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2PolicyInput from a JSON string
in_mage_azure_v2_policy_input_instance = InMageAzureV2PolicyInput.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2PolicyInput.to_json())

# convert the object into a dict
in_mage_azure_v2_policy_input_dict = in_mage_azure_v2_policy_input_instance.to_dict()
# create an instance of InMageAzureV2PolicyInput from a dict
in_mage_azure_v2_policy_input_from_dict = InMageAzureV2PolicyInput.from_dict(in_mage_azure_v2_policy_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


