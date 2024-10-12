# GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec

Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Output only. The Data Catalog resource name of the dataset entry the current table belongs to, for example, &#x60;projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}&#x60;. | [optional] [readonly] 
**shard_count** | **str** | Output only. Total number of shards. | [optional] [readonly] 
**table_prefix** | **str** | Output only. The table name prefix of the shards. The name of any given shard is &#x60;[table_prefix]YYYYMMDD&#x60;, for example, for shard &#x60;MyTable20180101&#x60;, the &#x60;table_prefix&#x60; is &#x60;MyTable&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_big_query_date_sharded_spec import GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec from a JSON string
google_cloud_datacatalog_v1beta1_big_query_date_sharded_spec_instance = GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_big_query_date_sharded_spec_dict = google_cloud_datacatalog_v1beta1_big_query_date_sharded_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec from a dict
google_cloud_datacatalog_v1beta1_big_query_date_sharded_spec_from_dict = GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec.from_dict(google_cloud_datacatalog_v1beta1_big_query_date_sharded_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


