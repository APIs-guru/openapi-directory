# RecoveryPlanHyperVReplicaAzureFailbackInput

Recovery plan HVR Azure failback input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_sync_option** | **str** | The data sync option. | 
**recovery_vm_creation_option** | **str** | The ALR option. | 

## Example

```python
from openapi_client.models.recovery_plan_hyper_v_replica_azure_failback_input import RecoveryPlanHyperVReplicaAzureFailbackInput

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanHyperVReplicaAzureFailbackInput from a JSON string
recovery_plan_hyper_v_replica_azure_failback_input_instance = RecoveryPlanHyperVReplicaAzureFailbackInput.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanHyperVReplicaAzureFailbackInput.to_json())

# convert the object into a dict
recovery_plan_hyper_v_replica_azure_failback_input_dict = recovery_plan_hyper_v_replica_azure_failback_input_instance.to_dict()
# create an instance of RecoveryPlanHyperVReplicaAzureFailbackInput from a dict
recovery_plan_hyper_v_replica_azure_failback_input_from_dict = RecoveryPlanHyperVReplicaAzureFailbackInput.from_dict(recovery_plan_hyper_v_replica_azure_failback_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


