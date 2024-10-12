# RedisCreateParameters

Parameters supplied to the Create Redis operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The geo-location where the resource lives | 
**properties** | [**RedisCreateProperties**](RedisCreateProperties.md) |  | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**zones** | **List[str]** | A list of availability zones denoting where the resource needs to come from. | [optional] 

## Example

```python
from openapi_client.models.redis_create_parameters import RedisCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RedisCreateParameters from a JSON string
redis_create_parameters_instance = RedisCreateParameters.from_json(json)
# print the JSON string representation of the object
print(RedisCreateParameters.to_json())

# convert the object into a dict
redis_create_parameters_dict = redis_create_parameters_instance.to_dict()
# create an instance of RedisCreateParameters from a dict
redis_create_parameters_from_dict = RedisCreateParameters.from_dict(redis_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


