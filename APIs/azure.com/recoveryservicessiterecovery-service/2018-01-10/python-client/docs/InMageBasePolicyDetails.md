# InMageBasePolicyDetails

Base class for the policies of providers using InMage replication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_consistent_frequency_in_minutes** | **int** | The app consistent snapshot frequency in minutes. | [optional] 
**multi_vm_sync_status** | **str** | A value indicating whether multi-VM sync has to be enabled. | [optional] 
**recovery_point_history** | **int** | The duration in minutes until which the recovery points need to be stored. | [optional] 
**recovery_point_threshold_in_minutes** | **int** | The recovery point threshold in minutes. | [optional] 

## Example

```python
from openapi_client.models.in_mage_base_policy_details import InMageBasePolicyDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageBasePolicyDetails from a JSON string
in_mage_base_policy_details_instance = InMageBasePolicyDetails.from_json(json)
# print the JSON string representation of the object
print(InMageBasePolicyDetails.to_json())

# convert the object into a dict
in_mage_base_policy_details_dict = in_mage_base_policy_details_instance.to_dict()
# create an instance of InMageBasePolicyDetails from a dict
in_mage_base_policy_details_from_dict = InMageBasePolicyDetails.from_dict(in_mage_base_policy_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


