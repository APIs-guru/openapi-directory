# NodeTypeConfig

Information about the type and number of nodes associated with the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_core_count** | **int** | Optional. Customized number of cores available to each node of the type. This number must always be one of &#x60;nodeType.availableCustomCoreCounts&#x60;. If zero is provided max value from &#x60;nodeType.availableCustomCoreCounts&#x60; will be used. | [optional] 
**node_count** | **int** | Required. The number of nodes of this type in the cluster | [optional] 

## Example

```python
from openapi_client.models.node_type_config import NodeTypeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NodeTypeConfig from a JSON string
node_type_config_instance = NodeTypeConfig.from_json(json)
# print the JSON string representation of the object
print(NodeTypeConfig.to_json())

# convert the object into a dict
node_type_config_dict = node_type_config_instance.to_dict()
# create an instance of NodeTypeConfig from a dict
node_type_config_from_dict = NodeTypeConfig.from_dict(node_type_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


