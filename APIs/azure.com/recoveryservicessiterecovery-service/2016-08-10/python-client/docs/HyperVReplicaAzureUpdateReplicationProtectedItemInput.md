# HyperVReplicaAzureUpdateReplicationProtectedItemInput

HyperV replica Azure input to update replication protected item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_azure_v1_resource_group_id** | **str** | The recovery Azure resource group Id for classic deployment. | [optional] 
**recovery_azure_v2_resource_group_id** | **str** | The recovery Azure resource group Id for resource manager deployment. | [optional] 
**use_managed_disks** | **str** | A value indicating whether managed disks should be used during failover. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_azure_update_replication_protected_item_input import HyperVReplicaAzureUpdateReplicationProtectedItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaAzureUpdateReplicationProtectedItemInput from a JSON string
hyper_v_replica_azure_update_replication_protected_item_input_instance = HyperVReplicaAzureUpdateReplicationProtectedItemInput.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaAzureUpdateReplicationProtectedItemInput.to_json())

# convert the object into a dict
hyper_v_replica_azure_update_replication_protected_item_input_dict = hyper_v_replica_azure_update_replication_protected_item_input_instance.to_dict()
# create an instance of HyperVReplicaAzureUpdateReplicationProtectedItemInput from a dict
hyper_v_replica_azure_update_replication_protected_item_input_from_dict = HyperVReplicaAzureUpdateReplicationProtectedItemInput.from_dict(hyper_v_replica_azure_update_replication_protected_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


