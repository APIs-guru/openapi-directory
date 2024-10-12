# NodePoolDefaults

Subset of Nodepool message that has defaults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_config_defaults** | [**NodeConfigDefaults**](NodeConfigDefaults.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_pool_defaults import NodePoolDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of NodePoolDefaults from a JSON string
node_pool_defaults_instance = NodePoolDefaults.from_json(json)
# print the JSON string representation of the object
print(NodePoolDefaults.to_json())

# convert the object into a dict
node_pool_defaults_dict = node_pool_defaults_instance.to_dict()
# create an instance of NodePoolDefaults from a dict
node_pool_defaults_from_dict = NodePoolDefaults.from_dict(node_pool_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


