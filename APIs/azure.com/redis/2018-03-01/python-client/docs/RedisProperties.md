# RedisProperties

Properties of the redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_keys** | [**RedisAccessKeys**](RedisAccessKeys.md) |  | [optional] 
**host_name** | **str** | Redis host name. | [optional] [readonly] 
**linked_servers** | [**List[RedisLinkedServer]**](RedisLinkedServer.md) | List of the linked servers associated with the cache | [optional] [readonly] 
**port** | **int** | Redis non-SSL port. | [optional] [readonly] 
**provisioning_state** | **str** | Redis instance provisioning status. | [optional] [readonly] 
**redis_version** | **str** | Redis version. | [optional] [readonly] 
**ssl_port** | **int** | Redis SSL port. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | 
**static_ip** | **str** | Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network. | [optional] 
**subnet_id** | **str** | The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1 | [optional] 
**enable_non_ssl_port** | **bool** | Specifies whether the non-ssl Redis server port (6379) is enabled. | [optional] 
**minimum_tls_version** | **str** | Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, &#39;1.0&#39;, &#39;1.1&#39;, &#39;1.2&#39;) | [optional] 
**redis_configuration** | **Dict[str, str]** | All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc. | [optional] 
**shard_count** | **int** | The number of shards to be created on a Premium Cluster Cache. | [optional] 
**tenant_settings** | **Dict[str, str]** | A dictionary of tenant settings | [optional] 

## Example

```python
from openapi_client.models.redis_properties import RedisProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RedisProperties from a JSON string
redis_properties_instance = RedisProperties.from_json(json)
# print the JSON string representation of the object
print(RedisProperties.to_json())

# convert the object into a dict
redis_properties_dict = redis_properties_instance.to_dict()
# create an instance of RedisProperties from a dict
redis_properties_from_dict = RedisProperties.from_dict(redis_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


