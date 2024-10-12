# GoogleCloudDatacatalogV1BigQueryDateShardedSpec

Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Output only. The Data Catalog resource name of the dataset entry the current table belongs to. For example: &#x60;projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}&#x60;. | [optional] [readonly] 
**latest_shard_resource** | **str** | Output only. BigQuery resource name of the latest shard. | [optional] [readonly] 
**shard_count** | **str** | Output only. Total number of shards. | [optional] [readonly] 
**table_prefix** | **str** | Output only. The table name prefix of the shards. The name of any given shard is &#x60;[table_prefix]YYYYMMDD&#x60;. For example, for the &#x60;MyTable20180101&#x60; shard, the &#x60;table_prefix&#x60; is &#x60;MyTable&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_big_query_date_sharded_spec import GoogleCloudDatacatalogV1BigQueryDateShardedSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1BigQueryDateShardedSpec from a JSON string
google_cloud_datacatalog_v1_big_query_date_sharded_spec_instance = GoogleCloudDatacatalogV1BigQueryDateShardedSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1BigQueryDateShardedSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_big_query_date_sharded_spec_dict = google_cloud_datacatalog_v1_big_query_date_sharded_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1BigQueryDateShardedSpec from a dict
google_cloud_datacatalog_v1_big_query_date_sharded_spec_from_dict = GoogleCloudDatacatalogV1BigQueryDateShardedSpec.from_dict(google_cloud_datacatalog_v1_big_query_date_sharded_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


