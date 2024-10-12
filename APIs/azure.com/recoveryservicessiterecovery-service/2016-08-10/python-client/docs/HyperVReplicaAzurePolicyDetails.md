# HyperVReplicaAzurePolicyDetails

Hyper-V Replica Azure specific protection profile details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_storage_account_id** | **str** | The active storage account Id. | [optional] 
**application_consistent_snapshot_frequency_in_hours** | **int** | The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM. | [optional] 
**encryption** | **str** | A value indicating whether encryption is enabled for virtual machines in this cloud. | [optional] 
**online_replication_start_time** | **str** | The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately. | [optional] 
**recovery_point_history_duration_in_hours** | **int** | The duration (in hours) to which point the recovery history needs to be maintained. | [optional] 
**replication_interval** | **int** | The replication interval. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_azure_policy_details import HyperVReplicaAzurePolicyDetails

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaAzurePolicyDetails from a JSON string
hyper_v_replica_azure_policy_details_instance = HyperVReplicaAzurePolicyDetails.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaAzurePolicyDetails.to_json())

# convert the object into a dict
hyper_v_replica_azure_policy_details_dict = hyper_v_replica_azure_policy_details_instance.to_dict()
# create an instance of HyperVReplicaAzurePolicyDetails from a dict
hyper_v_replica_azure_policy_details_from_dict = HyperVReplicaAzurePolicyDetails.from_dict(hyper_v_replica_azure_policy_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


