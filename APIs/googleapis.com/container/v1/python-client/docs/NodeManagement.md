# NodeManagement

NodeManagement defines the set of node management services turned on for the node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_repair** | **bool** | A flag that specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered. | [optional] 
**auto_upgrade** | **bool** | A flag that specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes. | [optional] 
**upgrade_options** | [**AutoUpgradeOptions**](AutoUpgradeOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_management import NodeManagement

# TODO update the JSON string below
json = "{}"
# create an instance of NodeManagement from a JSON string
node_management_instance = NodeManagement.from_json(json)
# print the JSON string representation of the object
print(NodeManagement.to_json())

# convert the object into a dict
node_management_dict = node_management_instance.to_dict()
# create an instance of NodeManagement from a dict
node_management_from_dict = NodeManagement.from_dict(node_management_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


