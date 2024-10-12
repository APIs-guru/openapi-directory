# UniformSharding

Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to \"-e numShard\" and \"-e shardIndex\" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_shards** | **int** | Required. The total number of shards to create. This must always be a positive number that is no greater than the total number of test cases. When you select one or more physical devices, the number of shards must be &lt;&#x3D; 50. When you select one or more ARM virtual devices, it must be &lt;&#x3D; 200. When you select only x86 virtual devices, it must be &lt;&#x3D; 500. | [optional] 

## Example

```python
from openapi_client.models.uniform_sharding import UniformSharding

# TODO update the JSON string below
json = "{}"
# create an instance of UniformSharding from a JSON string
uniform_sharding_instance = UniformSharding.from_json(json)
# print the JSON string representation of the object
print(UniformSharding.to_json())

# convert the object into a dict
uniform_sharding_dict = uniform_sharding_instance.to_dict()
# create an instance of UniformSharding from a dict
uniform_sharding_from_dict = UniformSharding.from_dict(uniform_sharding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


