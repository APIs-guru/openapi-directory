# RecoveryPlanInMageAzureV2FailoverInput

Recovery plan InMageAzureV2 failover input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_point_type** | **str** | The recovery point type. | 
**use_multi_vm_sync_point** | **str** | A value indicating whether multi VM sync enabled VMs should use multi VM sync points for failover. | [optional] 
**vault_location** | **str** | The vault location. | 

## Example

```python
from openapi_client.models.recovery_plan_in_mage_azure_v2_failover_input import RecoveryPlanInMageAzureV2FailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanInMageAzureV2FailoverInput from a JSON string
recovery_plan_in_mage_azure_v2_failover_input_instance = RecoveryPlanInMageAzureV2FailoverInput.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanInMageAzureV2FailoverInput.to_json())

# convert the object into a dict
recovery_plan_in_mage_azure_v2_failover_input_dict = recovery_plan_in_mage_azure_v2_failover_input_instance.to_dict()
# create an instance of RecoveryPlanInMageAzureV2FailoverInput from a dict
recovery_plan_in_mage_azure_v2_failover_input_from_dict = RecoveryPlanInMageAzureV2FailoverInput.from_dict(recovery_plan_in_mage_azure_v2_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


