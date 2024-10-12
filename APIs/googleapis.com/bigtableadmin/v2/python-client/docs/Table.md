# Table

A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_stream_config** | [**ChangeStreamConfig**](ChangeStreamConfig.md) |  | [optional] 
**cluster_states** | [**Dict[str, ClusterState]**](ClusterState.md) | Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN &#x60;replication_status&#x60;. Views: &#x60;REPLICATION_VIEW&#x60;, &#x60;ENCRYPTION_VIEW&#x60;, &#x60;FULL&#x60; | [optional] [readonly] 
**column_families** | [**Dict[str, ColumnFamily]**](ColumnFamily.md) | The column families configured for this table, mapped by column family ID. Views: &#x60;SCHEMA_VIEW&#x60;, &#x60;STATS_VIEW&#x60;, &#x60;FULL&#x60; | [optional] 
**deletion_protection** | **bool** | Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs. | [optional] 
**granularity** | **str** | Immutable. The granularity (i.e. &#x60;MILLIS&#x60;) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to &#x60;MILLIS&#x60;. Views: &#x60;SCHEMA_VIEW&#x60;, &#x60;FULL&#x60;. | [optional] 
**name** | **str** | The unique name of the table. Values are of the form &#x60;projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*&#x60;. Views: &#x60;NAME_ONLY&#x60;, &#x60;SCHEMA_VIEW&#x60;, &#x60;REPLICATION_VIEW&#x60;, &#x60;STATS_VIEW&#x60;, &#x60;FULL&#x60; | [optional] 
**restore_info** | [**RestoreInfo**](RestoreInfo.md) |  | [optional] 
**stats** | [**TableStats**](TableStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.table import Table

# TODO update the JSON string below
json = "{}"
# create an instance of Table from a JSON string
table_instance = Table.from_json(json)
# print the JSON string representation of the object
print(Table.to_json())

# convert the object into a dict
table_dict = table_instance.to_dict()
# create an instance of Table from a dict
table_from_dict = Table.from_dict(table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


