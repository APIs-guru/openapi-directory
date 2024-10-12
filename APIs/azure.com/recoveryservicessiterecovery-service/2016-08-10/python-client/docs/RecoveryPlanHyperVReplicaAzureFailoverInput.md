# RecoveryPlanHyperVReplicaAzureFailoverInput

Recovery plan HVR Azure failover input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_kek_certificate_pfx** | **str** | The primary KEK certificate PFX. | [optional] 
**recovery_point_type** | **str** | The recovery point type. | [optional] 
**secondary_kek_certificate_pfx** | **str** | The secondary KEK certificate PFX. | [optional] 
**vault_location** | **str** | The vault location. | 

## Example

```python
from openapi_client.models.recovery_plan_hyper_v_replica_azure_failover_input import RecoveryPlanHyperVReplicaAzureFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanHyperVReplicaAzureFailoverInput from a JSON string
recovery_plan_hyper_v_replica_azure_failover_input_instance = RecoveryPlanHyperVReplicaAzureFailoverInput.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanHyperVReplicaAzureFailoverInput.to_json())

# convert the object into a dict
recovery_plan_hyper_v_replica_azure_failover_input_dict = recovery_plan_hyper_v_replica_azure_failover_input_instance.to_dict()
# create an instance of RecoveryPlanHyperVReplicaAzureFailoverInput from a dict
recovery_plan_hyper_v_replica_azure_failover_input_from_dict = RecoveryPlanHyperVReplicaAzureFailoverInput.from_dict(recovery_plan_hyper_v_replica_azure_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


