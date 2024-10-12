# HivePartitioningOptions

Options for configuring hive partitioning detect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **List[str]** | Output only. For permanent external tables, this field is populated with the hive partition keys in the order they were inferred. The types of the partition keys can be deduced by checking the table schema (which will include the partition keys). Not every API will populate this field in the output. For example, Tables.Get will populate it, but Tables.List will not contain this field. | [optional] [readonly] 
**mode** | **str** | Optional. When set, what mode of hive partitioning to use when reading data. The following modes are supported: * AUTO: automatically infer partition key name(s) and type(s). * STRINGS: automatically infer partition key name(s). All types are strings. * CUSTOM: partition key schema is encoded in the source URI prefix. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported formats are: JSON, CSV, ORC, Avro and Parquet. | [optional] 
**require_partition_filter** | **bool** | Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. Note that this field should only be true when creating a permanent external table or querying a temporary external table. Hive-partitioned loads with require_partition_filter explicitly set to true will fail. | [optional] [default to False]
**source_uri_prefix** | **str** | Optional. When hive partition detection is requested, a common prefix for all source uris must be required. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout: gs://bucket/path_to_table/dt&#x3D;2019-06-01/country&#x3D;USA/id&#x3D;7/file.avro gs://bucket/path_to_table/dt&#x3D;2019-05-31/country&#x3D;CA/id&#x3D;3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/. CUSTOM detection requires encoding the partitioning schema immediately after the common prefix. For CUSTOM, any of * gs://bucket/path_to_table/{dt:DATE}/{country:STRING}/{id:INTEGER} * gs://bucket/path_to_table/{dt:STRING}/{country:STRING}/{id:INTEGER} * gs://bucket/path_to_table/{dt:DATE}/{country:STRING}/{id:STRING} would all be valid source URI prefixes. | [optional] 

## Example

```python
from openapi_client.models.hive_partitioning_options import HivePartitioningOptions

# TODO update the JSON string below
json = "{}"
# create an instance of HivePartitioningOptions from a JSON string
hive_partitioning_options_instance = HivePartitioningOptions.from_json(json)
# print the JSON string representation of the object
print(HivePartitioningOptions.to_json())

# convert the object into a dict
hive_partitioning_options_dict = hive_partitioning_options_instance.to_dict()
# create an instance of HivePartitioningOptions from a dict
hive_partitioning_options_from_dict = HivePartitioningOptions.from_dict(hive_partitioning_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


