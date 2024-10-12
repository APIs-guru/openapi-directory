# RedisCreateOrUpdateParameters

Parameters supplied to the CreateOrUpdate Redis operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RedisProperties**](RedisProperties.md) |  | 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.redis_create_or_update_parameters import RedisCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RedisCreateOrUpdateParameters from a JSON string
redis_create_or_update_parameters_instance = RedisCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RedisCreateOrUpdateParameters.to_json())

# convert the object into a dict
redis_create_or_update_parameters_dict = redis_create_or_update_parameters_instance.to_dict()
# create an instance of RedisCreateOrUpdateParameters from a dict
redis_create_or_update_parameters_from_dict = RedisCreateOrUpdateParameters.from_dict(redis_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


