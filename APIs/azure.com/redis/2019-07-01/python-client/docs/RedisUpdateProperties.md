# RedisUpdateProperties

Patchable properties of the redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 
**enable_non_ssl_port** | **bool** | Specifies whether the non-ssl Redis server port (6379) is enabled. | [optional] 
**minimum_tls_version** | **str** | Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, &#39;1.0&#39;, &#39;1.1&#39;, &#39;1.2&#39;) | [optional] 
**redis_configuration** | **Dict[str, str]** | All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc. | [optional] 
**replicas_per_master** | **int** | The number of replicas to be created per master. | [optional] 
**shard_count** | **int** | The number of shards to be created on a Premium Cluster Cache. | [optional] 
**tenant_settings** | **Dict[str, str]** | A dictionary of tenant settings | [optional] 

## Example

```python
from openapi_client.models.redis_update_properties import RedisUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RedisUpdateProperties from a JSON string
redis_update_properties_instance = RedisUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(RedisUpdateProperties.to_json())

# convert the object into a dict
redis_update_properties_dict = redis_update_properties_instance.to_dict()
# create an instance of RedisUpdateProperties from a dict
redis_update_properties_from_dict = RedisUpdateProperties.from_dict(redis_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


