# KeyValueStoreReplicaStatus

Key value store related information for the replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_notification_current_key_filter** | **str** | Value indicating the latest key-prefix filter applied to enumeration during the callback. Null if there is no pending callback. | [optional] 
**copy_notification_current_progress** | **str** | Value indicating the latest number of keys enumerated during the callback. 0 if there is no pending callback. | [optional] 
**database_logical_size_estimate** | **str** | Value indicating the estimated size of the underlying database. | [optional] 
**database_row_count_estimate** | **str** | Value indicating the estimated number of rows in the underlying database. | [optional] 
**status_details** | **str** | Value indicating the current status details of the replica. | [optional] 

## Example

```python
from openapi_client.models.key_value_store_replica_status import KeyValueStoreReplicaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValueStoreReplicaStatus from a JSON string
key_value_store_replica_status_instance = KeyValueStoreReplicaStatus.from_json(json)
# print the JSON string representation of the object
print(KeyValueStoreReplicaStatus.to_json())

# convert the object into a dict
key_value_store_replica_status_dict = key_value_store_replica_status_instance.to_dict()
# create an instance of KeyValueStoreReplicaStatus from a dict
key_value_store_replica_status_from_dict = KeyValueStoreReplicaStatus.from_dict(key_value_store_replica_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


