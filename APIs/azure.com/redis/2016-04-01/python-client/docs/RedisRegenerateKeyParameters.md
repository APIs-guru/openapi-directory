# RedisRegenerateKeyParameters

Specifies which Redis access keys to reset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | **str** | The Redis access key to regenerate. | 

## Example

```python
from openapi_client.models.redis_regenerate_key_parameters import RedisRegenerateKeyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RedisRegenerateKeyParameters from a JSON string
redis_regenerate_key_parameters_instance = RedisRegenerateKeyParameters.from_json(json)
# print the JSON string representation of the object
print(RedisRegenerateKeyParameters.to_json())

# convert the object into a dict
redis_regenerate_key_parameters_dict = redis_regenerate_key_parameters_instance.to_dict()
# create an instance of RedisRegenerateKeyParameters from a dict
redis_regenerate_key_parameters_from_dict = RedisRegenerateKeyParameters.from_dict(redis_regenerate_key_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


