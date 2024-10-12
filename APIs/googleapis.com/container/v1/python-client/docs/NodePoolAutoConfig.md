# NodePoolAutoConfig

Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_tags** | [**NetworkTags**](NetworkTags.md) |  | [optional] 
**resource_manager_tags** | [**ResourceManagerTags**](ResourceManagerTags.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_pool_auto_config import NodePoolAutoConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NodePoolAutoConfig from a JSON string
node_pool_auto_config_instance = NodePoolAutoConfig.from_json(json)
# print the JSON string representation of the object
print(NodePoolAutoConfig.to_json())

# convert the object into a dict
node_pool_auto_config_dict = node_pool_auto_config_instance.to_dict()
# create an instance of NodePoolAutoConfig from a dict
node_pool_auto_config_from_dict = NodePoolAutoConfig.from_dict(node_pool_auto_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


