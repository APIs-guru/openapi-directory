# HyperVReplicaAzureApplyRecoveryPointInput

ApplyRecoveryPoint input specific to HyperVReplicaAzure provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_kek_certificate_pfx** | **str** | The primary kek certificate pfx. | [optional] 
**secondary_kek_certificate_pfx** | **str** | The secondary kek certificate pfx. | [optional] 
**vault_location** | **str** | The vault location where the recovery Vm resides. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_azure_apply_recovery_point_input import HyperVReplicaAzureApplyRecoveryPointInput

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaAzureApplyRecoveryPointInput from a JSON string
hyper_v_replica_azure_apply_recovery_point_input_instance = HyperVReplicaAzureApplyRecoveryPointInput.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaAzureApplyRecoveryPointInput.to_json())

# convert the object into a dict
hyper_v_replica_azure_apply_recovery_point_input_dict = hyper_v_replica_azure_apply_recovery_point_input_instance.to_dict()
# create an instance of HyperVReplicaAzureApplyRecoveryPointInput from a dict
hyper_v_replica_azure_apply_recovery_point_input_from_dict = HyperVReplicaAzureApplyRecoveryPointInput.from_dict(hyper_v_replica_azure_apply_recovery_point_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


