# CassandraPartitionKey

Cosmos DB Cassandra table partition key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Cosmos DB Cassandra table partition key | [optional] 

## Example

```python
from openapi_client.models.cassandra_partition_key import CassandraPartitionKey

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraPartitionKey from a JSON string
cassandra_partition_key_instance = CassandraPartitionKey.from_json(json)
# print the JSON string representation of the object
print(CassandraPartitionKey.to_json())

# convert the object into a dict
cassandra_partition_key_dict = cassandra_partition_key_instance.to_dict()
# create an instance of CassandraPartitionKey from a dict
cassandra_partition_key_from_dict = CassandraPartitionKey.from_dict(cassandra_partition_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


