# ReadPoolConfig

Configuration for a read pool instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_count** | **int** | Read capacity, i.e. number of nodes in a read pool instance. | [optional] 

## Example

```python
from openapi_client.models.read_pool_config import ReadPoolConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ReadPoolConfig from a JSON string
read_pool_config_instance = ReadPoolConfig.from_json(json)
# print the JSON string representation of the object
print(ReadPoolConfig.to_json())

# convert the object into a dict
read_pool_config_dict = read_pool_config_instance.to_dict()
# create an instance of ReadPoolConfig from a dict
read_pool_config_from_dict = ReadPoolConfig.from_dict(read_pool_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


