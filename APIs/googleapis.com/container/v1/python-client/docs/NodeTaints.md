# NodeTaints

Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taints** | [**List[NodeTaint]**](NodeTaint.md) | List of node taints. | [optional] 

## Example

```python
from openapi_client.models.node_taints import NodeTaints

# TODO update the JSON string below
json = "{}"
# create an instance of NodeTaints from a JSON string
node_taints_instance = NodeTaints.from_json(json)
# print the JSON string representation of the object
print(NodeTaints.to_json())

# convert the object into a dict
node_taints_dict = node_taints_instance.to_dict()
# create an instance of NodeTaints from a dict
node_taints_from_dict = NodeTaints.from_dict(node_taints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


