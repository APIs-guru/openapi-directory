# GeoReplicationStats

Statistics related to replication for storage account's Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_failover** | **bool** | A boolean flag which indicates whether or not account failover is supported for the account. | [optional] [readonly] 
**last_sync_time** | **datetime** | All primary writes preceding this UTC date/time value are guaranteed to be available for read operations. Primary writes following this point in time may or may not be available for reads. Element may be default value if value of LastSyncTime is not available, this can happen if secondary is offline or we are in bootstrap. | [optional] [readonly] 
**status** | **str** | The status of the secondary location. Possible values are: - Live: Indicates that the secondary location is active and operational. - Bootstrap: Indicates initial synchronization from the primary location to the secondary location is in progress.This typically occurs when replication is first enabled. - Unavailable: Indicates that the secondary location is temporarily unavailable. | [optional] [readonly] 

## Example

```python
from openapi_client.models.geo_replication_stats import GeoReplicationStats

# TODO update the JSON string below
json = "{}"
# create an instance of GeoReplicationStats from a JSON string
geo_replication_stats_instance = GeoReplicationStats.from_json(json)
# print the JSON string representation of the object
print(GeoReplicationStats.to_json())

# convert the object into a dict
geo_replication_stats_dict = geo_replication_stats_instance.to_dict()
# create an instance of GeoReplicationStats from a dict
geo_replication_stats_from_dict = GeoReplicationStats.from_dict(geo_replication_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


