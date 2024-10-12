# NodePoolLoggingConfig

NodePoolLoggingConfig specifies logging configuration for nodepools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variant_config** | [**LoggingVariantConfig**](LoggingVariantConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_pool_logging_config import NodePoolLoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NodePoolLoggingConfig from a JSON string
node_pool_logging_config_instance = NodePoolLoggingConfig.from_json(json)
# print the JSON string representation of the object
print(NodePoolLoggingConfig.to_json())

# convert the object into a dict
node_pool_logging_config_dict = node_pool_logging_config_instance.to_dict()
# create an instance of NodePoolLoggingConfig from a dict
node_pool_logging_config_from_dict = NodePoolLoggingConfig.from_dict(node_pool_logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


