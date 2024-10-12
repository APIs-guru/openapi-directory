# HyperVReplicaAzurePolicyInput

Hyper-V Replica Azure specific input for creating a protection profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_consistent_snapshot_frequency_in_hours** | **int** | The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM. | [optional] 
**encryption** | **str** | A value indicating whether encryption needs to be enabled for Vms in this cloud. | [optional] 
**online_replication_start_time** | **str** | The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately. | [optional] 
**recovery_point_history_duration** | **int** | The duration (in hours) to which point the recovery history needs to be maintained. | [optional] 
**replication_interval** | **int** | The replication interval. | [optional] 
**storage_accounts** | **List[str]** | The list of storage accounts to which the VMs in the primary cloud can replicate to. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_azure_policy_input import HyperVReplicaAzurePolicyInput

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaAzurePolicyInput from a JSON string
hyper_v_replica_azure_policy_input_instance = HyperVReplicaAzurePolicyInput.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaAzurePolicyInput.to_json())

# convert the object into a dict
hyper_v_replica_azure_policy_input_dict = hyper_v_replica_azure_policy_input_instance.to_dict()
# create an instance of HyperVReplicaAzurePolicyInput from a dict
hyper_v_replica_azure_policy_input_from_dict = HyperVReplicaAzurePolicyInput.from_dict(hyper_v_replica_azure_policy_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


