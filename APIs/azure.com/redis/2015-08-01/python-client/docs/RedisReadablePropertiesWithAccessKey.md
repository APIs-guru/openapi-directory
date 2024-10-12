# RedisReadablePropertiesWithAccessKey

Properties generated only in response to CreateOrUpdate Redis operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_keys** | [**RedisAccessKeys**](RedisAccessKeys.md) |  | [optional] 
**host_name** | **str** | Redis host name. | [optional] 
**port** | **int** | Redis non-SSL port. | [optional] 
**provisioning_state** | **str** | Redis instance provisioning status. | [optional] 
**ssl_port** | **int** | Redis SSL port. | [optional] 
**enable_non_ssl_port** | **bool** | If the value is true, then the non-SLL Redis server port (6379) will be enabled. | [optional] 
**redis_configuration** | **Dict[str, str]** | All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc. | [optional] 
**redis_version** | **str** | RedisVersion parameter has been deprecated. As such, it is no longer necessary to provide this parameter and any value specified is ignored. | [optional] 
**shard_count** | **int** | The number of shards to be created on a Premium Cluster Cache. | [optional] 
**sku** | [**Sku**](Sku.md) |  | 
**static_ip** | **str** | Required when deploying a Redis cache inside an existing Azure Virtual Network. | [optional] 
**subnet** | **str** | Required when deploying a Redis cache inside an existing Azure Virtual Network. | [optional] 
**tenant_settings** | **Dict[str, str]** | tenantSettings | [optional] 
**virtual_network** | **str** | The exact ARM resource ID of the virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.ClassicNetwork/VirtualNetworks/vnet1 | [optional] 

## Example

```python
from openapi_client.models.redis_readable_properties_with_access_key import RedisReadablePropertiesWithAccessKey

# TODO update the JSON string below
json = "{}"
# create an instance of RedisReadablePropertiesWithAccessKey from a JSON string
redis_readable_properties_with_access_key_instance = RedisReadablePropertiesWithAccessKey.from_json(json)
# print the JSON string representation of the object
print(RedisReadablePropertiesWithAccessKey.to_json())

# convert the object into a dict
redis_readable_properties_with_access_key_dict = redis_readable_properties_with_access_key_instance.to_dict()
# create an instance of RedisReadablePropertiesWithAccessKey from a dict
redis_readable_properties_with_access_key_from_dict = RedisReadablePropertiesWithAccessKey.from_dict(redis_readable_properties_with_access_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


