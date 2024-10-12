# FailoverReplicationProtectedItemDetails

Failover details for a replication protected item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | The friendly name. | [optional] 
**name** | **str** | The name. | [optional] 
**network_connection_status** | **str** | The network connection status. | [optional] 
**network_friendly_name** | **str** | The network friendly name. | [optional] 
**recovery_point_id** | **str** | The recovery point Id. | [optional] 
**recovery_point_time** | **datetime** | The recovery point time. | [optional] 
**subnet** | **str** | The network subnet. | [optional] 
**test_vm_friendly_name** | **str** | The test Vm friendly name. | [optional] 
**test_vm_name** | **str** | The test Vm name. | [optional] 

## Example

```python
from openapi_client.models.failover_replication_protected_item_details import FailoverReplicationProtectedItemDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverReplicationProtectedItemDetails from a JSON string
failover_replication_protected_item_details_instance = FailoverReplicationProtectedItemDetails.from_json(json)
# print the JSON string representation of the object
print(FailoverReplicationProtectedItemDetails.to_json())

# convert the object into a dict
failover_replication_protected_item_details_dict = failover_replication_protected_item_details_instance.to_dict()
# create an instance of FailoverReplicationProtectedItemDetails from a dict
failover_replication_protected_item_details_from_dict = FailoverReplicationProtectedItemDetails.from_dict(failover_replication_protected_item_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


