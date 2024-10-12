# NodeConfig

Configuration for a Memcached Node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_count** | **int** | Required. Number of cpus per Memcached node. | [optional] 
**memory_size_mb** | **int** | Required. Memory size in MiB for each Memcached node. | [optional] 

## Example

```python
from openapi_client.models.node_config import NodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NodeConfig from a JSON string
node_config_instance = NodeConfig.from_json(json)
# print the JSON string representation of the object
print(NodeConfig.to_json())

# convert the object into a dict
node_config_dict = node_config_instance.to_dict()
# create an instance of NodeConfig from a dict
node_config_from_dict = NodeConfig.from_dict(node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


