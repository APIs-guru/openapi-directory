# RedisInstanceDetails

Details of single instance of redis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**non_ssl_port** | **int** | If enableNonSslPort is true, provides Redis instance Non-SSL port. | [optional] [readonly] 
**shard_id** | **int** | If clustering is enabled, the Shard ID of Redis Instance | [optional] [readonly] 
**ssl_port** | **int** | Redis instance SSL port. | [optional] [readonly] 
**zone** | **str** | If the Cache uses availability zones, specifies availability zone where this instance is located. | [optional] [readonly] 

## Example

```python
from openapi_client.models.redis_instance_details import RedisInstanceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RedisInstanceDetails from a JSON string
redis_instance_details_instance = RedisInstanceDetails.from_json(json)
# print the JSON string representation of the object
print(RedisInstanceDetails.to_json())

# convert the object into a dict
redis_instance_details_dict = redis_instance_details_instance.to_dict()
# create an instance of RedisInstanceDetails from a dict
redis_instance_details_from_dict = RedisInstanceDetails.from_dict(redis_instance_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


