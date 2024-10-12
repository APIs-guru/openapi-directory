# Table


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**biglake_configuration** | [**BigLakeConfiguration**](BigLakeConfiguration.md) |  | [optional] 
**clone_definition** | [**CloneDefinition**](CloneDefinition.md) |  | [optional] 
**clustering** | [**Clustering**](Clustering.md) |  | [optional] 
**creation_time** | **str** | Output only. The time when this table was created, in milliseconds since the epoch. | [optional] [readonly] 
**default_collation** | **str** | Optional. Defines the default collation specification of new STRING fields in the table. During table creation or update, if a STRING field is added to this table without explicit collation specified, then the table inherits the table default collation. A change to this field affects only fields added afterwards, and does not alter the existing fields. The following values are supported: * &#39;und:ci&#39;: undetermined locale, case insensitive. * &#39;&#39;: empty string. Default to case-sensitive behavior. | [optional] 
**default_rounding_mode** | **str** | Optional. Defines the default rounding mode specification of new decimal fields (NUMERIC OR BIGNUMERIC) in the table. During table creation or update, if a decimal field is added to this table without an explicit rounding mode specified, then the field inherits the table default rounding mode. Changing this field doesn&#39;t affect existing fields. | [optional] 
**description** | **str** | Optional. A user-friendly description of this table. | [optional] 
**encryption_configuration** | [**EncryptionConfiguration**](EncryptionConfiguration.md) |  | [optional] 
**etag** | **str** | Output only. A hash of this resource. | [optional] [readonly] 
**expiration_time** | **str** | Optional. The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables. | [optional] 
**external_data_configuration** | [**ExternalDataConfiguration**](ExternalDataConfiguration.md) |  | [optional] 
**friendly_name** | **str** | Optional. A descriptive name for this table. | [optional] 
**id** | **str** | Output only. An opaque ID uniquely identifying the table. | [optional] [readonly] 
**kind** | **str** | The type of resource ID. | [optional] [default to 'bigquery#table']
**labels** | **Dict[str, str]** | The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. | [optional] 
**last_modified_time** | **str** | Output only. The time when this table was last modified, in milliseconds since the epoch. | [optional] [readonly] 
**location** | **str** | Output only. The geographic location where the table resides. This value is inherited from the dataset. | [optional] [readonly] 
**materialized_view** | [**MaterializedViewDefinition**](MaterializedViewDefinition.md) |  | [optional] 
**materialized_view_status** | [**MaterializedViewStatus**](MaterializedViewStatus.md) |  | [optional] 
**max_staleness** | **str** | Optional. The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of sql IntervalValue type. | [optional] 
**model** | [**ModelDefinition**](ModelDefinition.md) |  | [optional] 
**num_active_logical_bytes** | **str** | Output only. Number of logical bytes that are less than 90 days old. | [optional] [readonly] 
**num_active_physical_bytes** | **str** | Output only. Number of physical bytes less than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. | [optional] [readonly] 
**num_bytes** | **str** | Output only. The size of this table in logical bytes, excluding any data in the streaming buffer. | [optional] [readonly] 
**num_long_term_bytes** | **str** | Output only. The number of logical bytes in the table that are considered \&quot;long-term storage\&quot;. | [optional] [readonly] 
**num_long_term_logical_bytes** | **str** | Output only. Number of logical bytes that are more than 90 days old. | [optional] [readonly] 
**num_long_term_physical_bytes** | **str** | Output only. Number of physical bytes more than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. | [optional] [readonly] 
**num_partitions** | **str** | Output only. The number of partitions present in the table or materialized view. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. | [optional] [readonly] 
**num_physical_bytes** | **str** | Output only. The physical size of this table in bytes. This includes storage used for time travel. | [optional] [readonly] 
**num_rows** | **str** | Output only. The number of rows of data in this table, excluding any data in the streaming buffer. | [optional] [readonly] 
**num_time_travel_physical_bytes** | **str** | Output only. Number of physical bytes used by time travel storage (deleted or changed data). This data is not kept in real time, and might be delayed by a few seconds to a few minutes. | [optional] [readonly] 
**num_total_logical_bytes** | **str** | Output only. Total number of logical bytes in the table or materialized view. | [optional] [readonly] 
**num_total_physical_bytes** | **str** | Output only. The physical size of this table in bytes. This also includes storage used for time travel. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. | [optional] [readonly] 
**range_partitioning** | [**RangePartitioning**](RangePartitioning.md) |  | [optional] 
**replicas** | [**List[TableReference]**](TableReference.md) | Optional. Output only. Table references of all replicas currently active on the table. | [optional] [readonly] 
**require_partition_filter** | **bool** | Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. | [optional] [default to False]
**resource_tags** | **Dict[str, str]** | [Optional] The tags associated with this table. Tag keys are globally unique. See additional information on [tags](https://cloud.google.com/iam/docs/tags-access-control#definitions). An object containing a list of \&quot;key\&quot;: value pairs. The key is the namespaced friendly name of the tag key, e.g. \&quot;12345/environment\&quot; where 12345 is parent id. The value is the friendly short name of the tag value, e.g. \&quot;production\&quot;. | [optional] 
**var_schema** | [**TableSchema**](TableSchema.md) |  | [optional] 
**self_link** | **str** | Output only. A URL that can be used to access this resource again. | [optional] [readonly] 
**snapshot_definition** | [**SnapshotDefinition**](SnapshotDefinition.md) |  | [optional] 
**streaming_buffer** | [**Streamingbuffer**](Streamingbuffer.md) |  | [optional] 
**table_constraints** | [**TableConstraints**](TableConstraints.md) |  | [optional] 
**table_reference** | [**TableReference**](TableReference.md) |  | [optional] 
**table_replication_info** | [**TableReplicationInfo**](TableReplicationInfo.md) |  | [optional] 
**time_partitioning** | [**TimePartitioning**](TimePartitioning.md) |  | [optional] 
**type** | **str** | Output only. Describes the table type. The following values are supported: * &#x60;TABLE&#x60;: A normal BigQuery table. * &#x60;VIEW&#x60;: A virtual table defined by a SQL query. * &#x60;EXTERNAL&#x60;: A table that references data stored in an external storage system, such as Google Cloud Storage. * &#x60;MATERIALIZED_VIEW&#x60;: A precomputed view defined by a SQL query. * &#x60;SNAPSHOT&#x60;: An immutable BigQuery table that preserves the contents of a base table at a particular time. See additional information on [table snapshots](/bigquery/docs/table-snapshots-intro). The default value is &#x60;TABLE&#x60;. | [optional] [readonly] 
**view** | [**ViewDefinition**](ViewDefinition.md) |  | [optional] 

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


