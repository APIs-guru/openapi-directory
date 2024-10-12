# ShardingOption

Options for enabling sharding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manual_sharding** | [**ManualSharding**](ManualSharding.md) |  | [optional] 
**smart_sharding** | [**SmartSharding**](SmartSharding.md) |  | [optional] 
**uniform_sharding** | [**UniformSharding**](UniformSharding.md) |  | [optional] 

## Example

```python
from openapi_client.models.sharding_option import ShardingOption

# TODO update the JSON string below
json = "{}"
# create an instance of ShardingOption from a JSON string
sharding_option_instance = ShardingOption.from_json(json)
# print the JSON string representation of the object
print(ShardingOption.to_json())

# convert the object into a dict
sharding_option_dict = sharding_option_instance.to_dict()
# create an instance of ShardingOption from a dict
sharding_option_from_dict = ShardingOption.from_dict(sharding_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


