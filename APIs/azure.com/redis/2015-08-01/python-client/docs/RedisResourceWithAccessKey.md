# RedisResourceWithAccessKey

A Redis item in CreateOrUpdate Operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RedisReadablePropertiesWithAccessKey**](RedisReadablePropertiesWithAccessKey.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.redis_resource_with_access_key import RedisResourceWithAccessKey

# TODO update the JSON string below
json = "{}"
# create an instance of RedisResourceWithAccessKey from a JSON string
redis_resource_with_access_key_instance = RedisResourceWithAccessKey.from_json(json)
# print the JSON string representation of the object
print(RedisResourceWithAccessKey.to_json())

# convert the object into a dict
redis_resource_with_access_key_dict = redis_resource_with_access_key_instance.to_dict()
# create an instance of RedisResourceWithAccessKey from a dict
redis_resource_with_access_key_from_dict = RedisResourceWithAccessKey.from_dict(redis_resource_with_access_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


