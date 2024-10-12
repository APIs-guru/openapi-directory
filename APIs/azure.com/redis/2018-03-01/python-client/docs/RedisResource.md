# RedisResource

A single Redis item in List or Get Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RedisProperties**](RedisProperties.md) |  | 
**zones** | **List[str]** | A list of availability zones denoting where the resource needs to come from. | [optional] 
**location** | **str** | The geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.redis_resource import RedisResource

# TODO update the JSON string below
json = "{}"
# create an instance of RedisResource from a JSON string
redis_resource_instance = RedisResource.from_json(json)
# print the JSON string representation of the object
print(RedisResource.to_json())

# convert the object into a dict
redis_resource_dict = redis_resource_instance.to_dict()
# create an instance of RedisResource from a dict
redis_resource_from_dict = RedisResource.from_dict(redis_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


