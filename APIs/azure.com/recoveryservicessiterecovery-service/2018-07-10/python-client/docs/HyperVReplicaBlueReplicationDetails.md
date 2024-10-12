# HyperVReplicaBlueReplicationDetails

HyperV replica 2012 R2 (Blue) replication details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_replication_details** | [**InitialReplicationDetails**](InitialReplicationDetails.md) |  | [optional] 
**last_replicated_time** | **datetime** | The Last replication time. | [optional] 
**v_m_disk_details** | [**List[DiskDetails]**](DiskDetails.md) | VM disk details. | [optional] 
**vm_id** | **str** | The virtual machine Id. | [optional] 
**vm_nics** | [**List[VMNicDetails]**](VMNicDetails.md) | The PE Network details. | [optional] 
**vm_protection_state** | **str** | The protection state for the vm. | [optional] 
**vm_protection_state_description** | **str** | The protection state description for the vm. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_blue_replication_details import HyperVReplicaBlueReplicationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaBlueReplicationDetails from a JSON string
hyper_v_replica_blue_replication_details_instance = HyperVReplicaBlueReplicationDetails.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaBlueReplicationDetails.to_json())

# convert the object into a dict
hyper_v_replica_blue_replication_details_dict = hyper_v_replica_blue_replication_details_instance.to_dict()
# create an instance of HyperVReplicaBlueReplicationDetails from a dict
hyper_v_replica_blue_replication_details_from_dict = HyperVReplicaBlueReplicationDetails.from_dict(hyper_v_replica_blue_replication_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


