# BigQueryOptions

Options that change functionality of a sink exporting data to BigQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_partitioned_tables** | **bool** | Optional. Whether to use BigQuery&#39;s partition tables (https://cloud.google.com/bigquery/docs/partitioned-tables). By default, Cloud Logging creates dated tables based on the log entries&#39; timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) has to be used instead. In both cases, tables are sharded based on UTC timezone. | [optional] 
**uses_timestamp_column_partitioning** | **bool** | Output only. True if new timestamp column based partitioning is in use, false if legacy ingress-time partitioning is in use.All new sinks will have this field set true and will use timestamp column based partitioning. If use_partitioned_tables is false, this value has no meaning and will be false. Legacy sinks using partitioned tables will have this field set to false. | [optional] [readonly] 

## Example

```python
from openapi_client.models.big_query_options import BigQueryOptions

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryOptions from a JSON string
big_query_options_instance = BigQueryOptions.from_json(json)
# print the JSON string representation of the object
print(BigQueryOptions.to_json())

# convert the object into a dict
big_query_options_dict = big_query_options_instance.to_dict()
# create an instance of BigQueryOptions from a dict
big_query_options_from_dict = BigQueryOptions.from_dict(big_query_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


