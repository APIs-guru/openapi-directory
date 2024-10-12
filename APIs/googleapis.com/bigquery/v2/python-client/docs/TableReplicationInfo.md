# TableReplicationInfo

Replication info of a table created using `AS REPLICA` DDL like: `CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replicated_source_last_refresh_time** | **str** | Optional. Output only. If source is a materialized view, this field signifies the last refresh time of the source. | [optional] [readonly] 
**replication_error** | [**ErrorProto**](ErrorProto.md) |  | [optional] 
**replication_interval_ms** | **str** | Required. Specifies the interval at which the source table is polled for updates. | [optional] 
**replication_status** | **str** | Optional. Output only. Replication status of configured replication. | [optional] [readonly] 
**source_table** | [**TableReference**](TableReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_replication_info import TableReplicationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TableReplicationInfo from a JSON string
table_replication_info_instance = TableReplicationInfo.from_json(json)
# print the JSON string representation of the object
print(TableReplicationInfo.to_json())

# convert the object into a dict
table_replication_info_dict = table_replication_info_instance.to_dict()
# create an instance of TableReplicationInfo from a dict
table_replication_info_from_dict = TableReplicationInfo.from_dict(table_replication_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


