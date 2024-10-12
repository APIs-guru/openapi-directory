# RedisResourceProperties

Parameters describing a Redis instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_keys** | [**RedisAccessKeys**](RedisAccessKeys.md) |  | [optional] 
**host_name** | **str** | Redis host name. | [optional] [readonly] 
**port** | **int** | Redis non-SSL port. | [optional] [readonly] 
**provisioning_state** | **str** | Redis instance provisioning status. | [optional] [readonly] 
**redis_version** | **str** | Redis version. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**ssl_port** | **int** | Redis SSL port. | [optional] [readonly] 
**enable_non_ssl_port** | **bool** | Specifies whether the non-ssl Redis server port (6379) is enabled. | [optional] 
**redis_configuration** | **Dict[str, str]** | All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc. | [optional] 
**shard_count** | **int** | The number of shards to be created on a Premium Cluster Cache. | [optional] 
**static_ip** | **str** | Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network. | [optional] 
**subnet_id** | **str** | The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1 | [optional] 
**tenant_settings** | **Dict[str, str]** | tenantSettings | [optional] 

## Example

```python
from openapi_client.models.redis_resource_properties import RedisResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RedisResourceProperties from a JSON string
redis_resource_properties_instance = RedisResourceProperties.from_json(json)
# print the JSON string representation of the object
print(RedisResourceProperties.to_json())

# convert the object into a dict
redis_resource_properties_dict = redis_resource_properties_instance.to_dict()
# create an instance of RedisResourceProperties from a dict
redis_resource_properties_from_dict = RedisResourceProperties.from_dict(redis_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


