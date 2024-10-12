# RedisUpdateParameters

Parameters supplied to the Update Redis operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RedisUpdateProperties**](RedisUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.redis_update_parameters import RedisUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RedisUpdateParameters from a JSON string
redis_update_parameters_instance = RedisUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RedisUpdateParameters.to_json())

# convert the object into a dict
redis_update_parameters_dict = redis_update_parameters_instance.to_dict()
# create an instance of RedisUpdateParameters from a dict
redis_update_parameters_from_dict = RedisUpdateParameters.from_dict(redis_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


